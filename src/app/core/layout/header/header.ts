import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStore } from '../../auth/application/auth-store';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header {
  private router = inject(Router);
  private authStore = inject(AuthStore);
  readonly user = this.authStore.user;
  readonly isAuthenticated = this.authStore.isAuthenticated;

  loginUser() {
    this.authStore
      .signIn('google')
      .then(() => this.router.navigate(['/dashboard']))
      .catch((err) => {
        console.error('Login failed', err);
      });
  }

  logout() {
    this.authStore
      .signOut()
      .then(() => this.router.navigate(['/']))
      .catch((err) => console.error('Logout failed', err));
  }
}
