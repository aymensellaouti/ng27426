import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerSeervice } from './services/logger.Service';
import { HelloService } from './services/hello.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // J'ajoute LoggerService à mon Menu
    LoggerSeervice,
    HelloService,
    // Bibilio externe qui travaille encore avec des modules
    importProvidersFrom()
  ]
};
