import { Component, EventEmitter, Output, Input, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAlert } from '../../components/icons/icon-alert';

@Component({
  selector: 'app-auth-form',
  imports: [CommonModule, IconAlert],
  templateUrl: './auth-form.html',
})
export class AuthForm {
  @Input() mode: 'login' | 'register' = 'login';
  @Input() loading = false;
  @Input() error: string | null = null;
  @Output() submitted = new EventEmitter<{ email: string; password: string }>();

  readonly email = signal('');
  readonly password = signal('');

  submit() {
    if (this.loading) return;
    this.submitted.emit({ email: this.email(), password: this.password() });
  }

  get title() {
    return this.mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta';
  }

  get primaryLabel() {
    return this.mode === 'login' ? 'Entrar' : 'Crear cuenta';
  }
}
