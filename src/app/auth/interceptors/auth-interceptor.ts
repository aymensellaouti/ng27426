import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth';
import { inject } from '@angular/core';
import { APP_CONST } from '../../config/app-const.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    // Si je suis authentifié j'ajoute le header avec le token sinon je ne fais rien
    const cloneReq = req.clone({
      setHeaders: {
        [APP_CONST.loginHttpHeader]: localStorage.getItem(APP_CONST.authToken) ?? ''
      }
    });
    return next(cloneReq);
  }

  return next(req);
};
