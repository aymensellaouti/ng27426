import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Bootstrap démarre l'application
// il a besoin d'un truc qui s'appelle App (ca a l'air d'tre l'application !!)
// et d'un truc qui s'appelle appConfig ca doit etre la config de l'application
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
