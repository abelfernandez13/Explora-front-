import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../auth/application/auth-store';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(AuthStore);

  if (auth.isAuthenticated()) {
    return true;
  }

  router.navigateByUrl('/');
  return false;
};
