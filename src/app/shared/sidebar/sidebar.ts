import { ChangeDetectionStrategy, Component, output, inject } from '@angular/core';
import { AuthStore } from '@core/auth/application/auth-store';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserBox } from '../components/user-box/user-box';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UserBox],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  readonly addCard = output<void>();

  private readonly auth = inject(AuthStore);
  private readonly router = inject(Router);

  readonly user = this.auth.user;
  readonly isAuthenticated = this.auth.isAuthenticated;
  readonly isBootstrapping = this.auth.isBootstrapping;

  async logout() {
    try {
      await this.auth.signOut();
      await this.router.navigate(['/']);
    } catch (e) {
      console.error('Logout failed', e);
    }
  }
}
