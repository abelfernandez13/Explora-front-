import { Component, EventEmitter, Output, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthForm } from '../../shared/components/auth-form/auth-form';
import { AuthStore } from '../../core/auth/application/auth-store';

@Component({
  selector: 'app-register-modal',
  imports: [CommonModule, AuthForm],
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
          <app-auth-form
            (submitted)="onSubmit($event)"
            mode="register"
            [error]="error()"
            [loading]="loading()"
          ></app-auth-form>
          <div class="mt-4 text-right">
            <button
              type="button"
              class="text-sm text-indigo-600 hover:text-indigo-700"
              (click)="switchToLogin.emit()"
              [disabled]="loading()"
            >
              Volver a iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RegisterModal {
  private store = inject(AuthStore);
  @Output() close = new EventEmitter<void>();
  @Output() switchToLogin = new EventEmitter<void>();

  readonly error = signal<string | null>(null);
  readonly loading = signal(false);

  onClose() {
    this.close.emit();
  }

  async onSubmit({ email, password }: { email: string; password: string }) {
    this.error.set(null);
    this.loading.set(true);
    try {
      await this.store.signUp({ email, password });
      this.onClose();
    } catch (err: any) {
      this.error.set(err?.message ?? String(err));
    } finally {
      this.loading.set(false);
    }
  }
}
