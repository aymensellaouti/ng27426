import { ApplicationConfig, importProvidersFrom, NgZone, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { LoggerSeervice } from './services/logger.Service';
import { HelloService } from './services/hello.service';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    // J'ajoute LoggerService à mon Menu
    LoggerSeervice,
    HelloService,
    provideToastr(),
    // { provide: NgZone, useValue: new NoopNgZone() },
    // Bibilio externe qui travaille encore avec des modules
    importProvidersFrom(),
  ],
};
