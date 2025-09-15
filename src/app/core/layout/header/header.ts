import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStore } from '../../auth/application/auth-store';
import { LoginModal } from '../../../domain/auth/login-modal';
import { RegisterModal } from '../../../domain/auth/register-modal';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LoginModal, RegisterModal],
  templateUrl: './header.html',
})
export class Header {
  // Inyecciones
  private readonly router = inject(Router);
  private readonly authStore = inject(AuthStore);

  private readonly _email = signal<string>('');
  private readonly _password = signal<string>('');
  private readonly _loading = signal<boolean>(false);

  readonly email = this._email.asReadonly();
  readonly password = this._password.asReadonly();
  readonly loading = this._loading.asReadonly();

  readonly user = this.authStore.user;
  readonly isAuthenticated = this.authStore.isAuthenticated;

  readonly error = signal<string | null>(null);
  readonly loginModal = signal(false);
  readonly registerModal = signal(false);
  // auth method: 'phone' | 'email'
  readonly authMethod = signal<'phone' | 'email'>('phone');

  selectMethod(method: 'phone' | 'email') {
    if (this.authMethod() !== method) {
      this.authMethod.set(method);
      this.error.set(null);
    }
  }

  private setError(err: any) {
    const message =
      typeof err === 'string'
        ? err
        : err && typeof err.message === 'string'
        ? err.message
        : String(err ?? 'Error desconocido');
    this.error.set(message.slice(0, 500));
    console.error('Auth error:', err);
  }

  private clearForm() {
    this._email.set('');
    this._password.set('');
    this.error.set(null);
  }

  private async navigateToDashboard() {
    try {
      await this.router.navigate(['/dashboard']);
    } catch (navErr) {
      console.error('Navigation error after auth:', navErr);
    }
  }

  private async onAuthSuccess(type: 'login' | 'register') {
    this.clearForm();
    if (type === 'login') this.loginModal.set(false);
    else this.registerModal.set(false);
    await this.navigateToDashboard();
  }

  openDialog(type: 'login' | 'register') {
    this.error.set(null);
    this._email.set('');
    this._password.set('');
    if (type === 'login') this.loginModal.set(true);
    else this.registerModal.set(true);
  }

  switchDialog() {
    if (this.loginModal()) this.toRegister();
    else if (this.registerModal()) this.toLogin();
  }

  toRegister() {
    this.loginModal.set(false);
    setTimeout(() => this.openDialog('register'), 120);
  }

  toLogin() {
    this.registerModal.set(false);
    setTimeout(() => this.openDialog('login'), 120);
  }

  closeRegisterModal() {
    this.registerModal.set(false);
  }

  closeLoginModal() {
    this.loginModal.set(false);
  }

  async loginWithEmail() {
    this.error.set(null);
    this._loading.set(true);
    try {
      await this.authStore.signIn('email', {
        email: this._email(),
        password: this._password(),
      });
      await this.onAuthSuccess('login');
    } catch (err) {
      this.setError(err);
    } finally {
      this._loading.set(false);
    }
  }

  async loginWithGoogle() {
    this.error.set(null);
    this._loading.set(true);
    try {
      await this.authStore.signIn('google');
      await this.onAuthSuccess('login');
    } catch (err) {
      this.setError(err);
    } finally {
      this._loading.set(false);
    }
  }

  async loginWithFacebook() {
    this.error.set(null);
    this._loading.set(true);
    try {
      // Implementar signIn('facebook') en AuthStore cuando exista
      if (typeof (this.authStore as any).signIn === 'function') {
        await (this.authStore as any).signIn('facebook');
        await this.onAuthSuccess('login');
      } else {
        this.error.set('Facebook no disponible.');
      }
    } catch (err) {
      this.setError(err);
    } finally {
      this._loading.set(false);
    }
  }

  async onAuthFormSubmit({ email, password }: { email: string; password: string }) {
    this.error.set(null);
    this._loading.set(true);
    try {
      if (this.registerModal()) {
        if (typeof (this.authStore as any).signUp === 'function') {
          await (this.authStore as any).signUp({ email, password });
          await this.onAuthSuccess('register');
        } else {
          this.error.set('Registro no disponible.');
        }
      } else {
        await this.authStore.signIn('email', { email, password });
        await this.onAuthSuccess('login');
      }
    } catch (err) {
      this.setError(err);
    } finally {
      this._loading.set(false);
    }
  }

  async registerWithEmail() {
    this.error.set(null);
    this._loading.set(true);
    try {
      if (typeof (this.authStore as any).signUp !== 'function') {
        this.error.set('El registro no está disponible en este momento.');
        return;
      }
      await (this.authStore as any).signUp({
        email: this._email(),
        password: this._password(),
      });
      await this.onAuthSuccess('register');
    } catch (err) {
      this.setError(err);
    } finally {
      this._loading.set(false);
    }
  }

  async logout() {
    try {
      await this.authStore.signOut();
      await this.router.navigate(['/']);
    } catch (err) {
      console.error('Logout failed', err);
    }
  }
}
