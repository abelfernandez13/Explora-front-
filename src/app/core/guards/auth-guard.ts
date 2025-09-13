import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../auth/application/auth-store';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthStore);

  if (auth.isAuthenticated()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
