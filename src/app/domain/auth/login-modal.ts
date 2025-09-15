import { Component, EventEmitter, Output, input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthForm } from '../../shared/components/auth-form/auth-form';
import { IconGoogle } from '../../shared/components/icons/icon-google';
import { IconFacebook } from '../../shared/components/icons/icon-facebook';
import { AuthStore } from '../../core/auth/application/auth-store';

@Component({
  selector: 'app-login-modal',
  imports: [CommonModule, AuthForm, IconGoogle, IconFacebook],
  template: `
    <div class="fixed inset-0 z-60 flex items-center justify-center" (keydown.escape)="onClose()">
      <div
        class="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm"
        (click)="onClose()"
        aria-hidden="true"
      ></div>
      <div class="relative z-60 w-full max-w-md mx-4">
        <div
          class="relative bg-white rounded-2xl shadow-2xl p-6 pt-12 pr-12 transform transition-all duration-200 ease-out"
        >
          <button
            type="button"
            (click)="onClose()"
            class="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-500 ring-1 ring-slate-200 shadow-sm hover:bg-slate-200 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition"
          >
            <span class="sr-only">Cerrar</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path stroke-linecap="round" stroke-width="2" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          <div class="flex gap-2 mb-4">
            <button
              type="button"
              (click)="selectMethod('phone')"
              [class]="
                authMethod() === 'phone'
                  ? 'flex-1 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm'
                  : 'flex-1 px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200'
              "
            >
              Teléfono
            </button>
            <button
              type="button"
              (click)="selectMethod('email')"
              [class]="
                authMethod() === 'email'
                  ? 'flex-1 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm'
                  : 'flex-1 px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200'
              "
            >
              Correo
            </button>
          </div>

          @if (authMethod() === 'email') {
          <app-auth-form
            (submitted)="onEmailSubmit($event)"
            mode="login"
            [error]="error()"
            [loading]="loading()"
          ></app-auth-form>
          } @else {
          <div class="border border-dashed border-slate-300 rounded-lg p-4 text-sm text-slate-500">
            <p class="mb-2 font-medium text-slate-600">Login por teléfono</p>
            <p class="mb-2">(Pendiente de implementación)</p>
          </div>
          }

          <div class="mt-6 space-y-3">
            <div>
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                (click)="loginWith('google')"
                [disabled]="loading()"
              >
                <app-icon-google></app-icon-google>
                Google
              </button>
            </div>
            <div>
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                (click)="loginWith('facebook')"
                [disabled]="loading()"
              >
                <app-icon-facebook></app-icon-facebook>
                Facebook
              </button>
            </div>
            <div class="flex items-center gap-2 text-slate-400">
              <span class="flex-1 h-px bg-slate-200"></span>
              <span class="text-xs">o</span>
              <span class="flex-1 h-px bg-slate-200"></span>
            </div>
            <div>
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                (click)="openRegister.emit()"
                [disabled]="loading()"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginModal {
  private store = inject(AuthStore);

  @Output() close = new EventEmitter<void>();
  @Output() openRegister = new EventEmitter<void>();

  readonly authMethod = signal<'phone' | 'email'>('phone');
  readonly error = signal<string | null>(null);
  readonly loading = signal(false);

  selectMethod(m: 'phone' | 'email') {
    if (this.authMethod() !== m) {
      this.authMethod.set(m);
      this.error.set(null);
    }
  }

  onClose() {
    this.close.emit();
  }

  async onEmailSubmit({ email, password }: { email: string; password: string }) {
    this.error.set(null);
    this.loading.set(true);
    try {
      await this.store.signIn('email', { email, password });
      this.onClose();
    } catch (err: any) {
      this.error.set(err?.message ?? String(err));
    } finally {
      this.loading.set(false);
    }
  }

  async loginWith(provider: 'google' | 'facebook') {
    this.error.set(null);
    this.loading.set(true);
    try {
      await this.store.signIn(provider);
      this.onClose();
    } catch (err: any) {
      this.error.set(err?.message ?? String(err));
      console.log(err);
    } finally {
      this.loading.set(false);
    }
  }
}
