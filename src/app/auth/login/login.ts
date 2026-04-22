import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../services/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(AuthService);
  toaster = inject(ToastrService);
  router = inject(Router);
  login(credendials: Credentials) {
    this.authService.login(credendials).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toaster.error("Veuillez vérifier vos credentials")
      }
    })
  }
}
