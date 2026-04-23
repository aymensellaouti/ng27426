import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { APP_ROUTES } from '../../config/app-routes.config';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isAuthenticated()) {
    router.navigate([APP_ROUTES.login]);
    return false;
  }
  return true;
};
