import { inject, Injectable, signal, computed } from '@angular/core';
import { AuthApi } from './api';
import { User, AuthProvider, AuthCredentials } from '../domain/auth-types';
import { AUTH_API } from '../auth-tokens';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private authApi = inject(AUTH_API) as AuthApi;
  private _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();
  readonly isAuthenticated = computed(() => !!this._user());
  private _bootstrapping = signal<boolean>(true);
  readonly isBootstrapping = this._bootstrapping.asReadonly();
  private _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  private readonly cookieName = 'app_session';
  private readonly cookieMaxDays = 7;

  constructor() {
    const cached = this.readSessionCookie();
    if (cached) {
      this._user.set(cached);
    }

    try {
      this.authApi.onAuthStateChanged((u) => {
        this._user.set(u);
        if (u) {
          this.writeSessionCookie(u);
        } else {
          this.clearSessionCookie();
        }
        if (this._bootstrapping()) this._bootstrapping.set(false);
        if (this._error()) this._error.set(null);
      });
    } catch (e: any) {
      this._bootstrapping.set(false);
      this._error.set(
        typeof e?.message === 'string' ? e.message : 'Error inicializando autenticación'
      );
    }
    if (cached) {
      queueMicrotask(() => {
        if (this._bootstrapping()) this._bootstrapping.set(false);
      });
    }
  }

  async signIn(provider: AuthProvider, credentials?: AuthCredentials): Promise<User> {
    const user = await this.authApi.signIn(provider, credentials);
    this._user.set(user);
    this.writeSessionCookie(user);
    return user;
  }

  async signUp(credentials?: AuthCredentials): Promise<User> {
    if (typeof (this.authApi as any).signUp === 'function') {
      const user = await this.authApi.signUp(credentials);
      this._user.set(user);
      this.writeSessionCookie(user);
      return user;
    }
    throw new Error('Registration not supported');
  }

  async signOut(): Promise<void> {
    await this.authApi.signOut();
    this._user.set(null);
    this.clearSessionCookie();
  }

  private writeSessionCookie(user: User) {
    try {
      const minimal: User = {
        id: user.id,
        email: user.email,
        displayName: user.displayName ?? '',
        photoURL: user.photoURL ?? '',
      };
      const value = encodeURIComponent(btoa(JSON.stringify(minimal)));
      const expires = new Date();
      expires.setDate(expires.getDate() + this.cookieMaxDays);
      document.cookie = `${
        this.cookieName
      }=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    } catch {}
  }

  private readSessionCookie(): User | null {
    try {
      const match = document.cookie
        .split(';')
        .map((c) => c.trim())
        .find((c) => c.startsWith(this.cookieName + '='));
      if (!match) return null;
      const raw = match.split('=')[1];
      if (!raw) return null;
      const json = atob(decodeURIComponent(raw));
      const data = JSON.parse(json) as Partial<User>;
      if (data && data.id && data.email) {
        return {
          id: data.id,
          email: data.email,
          displayName: data.displayName ?? '',
          photoURL: data.photoURL ?? '',
        };
      }
      return null;
    } catch {
      return null;
    }
  }

  private clearSessionCookie() {
    try {
      document.cookie = `${this.cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    } catch {}
  }
}
