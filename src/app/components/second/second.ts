import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  selector: 'app-second',
  imports: [],
  template: ` <p>Hello {{ name() }}</p> `,
  styles: ``,
})
export class Second {
  acr = inject(ActivatedRoute);
  router = inject(Router);
  name = signal('defaultName');
  constructor() {
    const paramName = this.acr.snapshot.params['name'];
    if(paramName == 'aymen') this.router.navigate([APP_ROUTES.cv]);
    this.name.set(paramName);
  }
}
