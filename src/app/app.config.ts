import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { LoggerSeervice } from './services/logger.Service';
import { HelloService } from './services/hello.service';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    // J'ajoute LoggerService à mon Menu
    LoggerSeervice,
    HelloService,
    provideToastr(),
    // Bibilio externe qui travaille encore avec des modules
    importProvidersFrom(),
  ],
};
