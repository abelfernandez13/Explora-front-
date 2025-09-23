import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStore } from '@core/auth/application/auth-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-box.html',
  styleUrls: ['./user-box.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBox {
  private readonly auth = inject(AuthStore);
  private readonly router = inject(Router);

  readonly user = this.auth.user;
  readonly isAuthenticated = this.auth.isAuthenticated;
  readonly isBootstrapping = this.auth.isBootstrapping;
  readonly error = this.auth.error;

  async logout() {
    try {
      await this.auth.signOut();
      await this.router.navigate(['/']);
    } catch (e) {
      console.error('Logout failed', e);
    }
  }
}
