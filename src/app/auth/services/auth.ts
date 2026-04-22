import { Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  login(credendials: Credentials): Observable<LoginResponseDto> {}
}
