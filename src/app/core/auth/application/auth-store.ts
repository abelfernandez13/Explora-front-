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

  constructor() {
    try {
      this.authApi.onAuthStateChanged((u) => this._user.set(u));
    } catch (e) {}
  }

  async signIn(provider: AuthProvider, credentials?: AuthCredentials): Promise<User> {
    const user = await this.authApi.signIn(provider, credentials);
    this._user.set(user);
    return user;
  }

  async signUp(credentials?: AuthCredentials): Promise<User> {
    if (typeof (this.authApi as any).signUp === 'function') {
      const user = await this.authApi.signUp(credentials);
      this._user.set(user);
      return user;
    }
    throw new Error('Registration not supported');
  }

  async signOut(): Promise<void> {
    await this.authApi.signOut();
    this._user.set(null);
  }
}
