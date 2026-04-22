import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONST } from '../../config/app-const.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  http = inject(HttpClient);
  login(credendials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credendials).pipe(
      tap(response => {
        localStorage.setItem(APP_CONST.authToken, response.id);
      })
    );
  }
  logout() {
    localStorage.removeItem(APP_CONST.authToken);
  }

  isAuthenticated(): boolean {
    return !! localStorage.getItem(APP_CONST.authToken);
  }
}
