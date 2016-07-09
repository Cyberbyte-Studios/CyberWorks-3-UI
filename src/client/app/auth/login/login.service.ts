import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
import { RequestService } from '../../shared/services/request.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class UserService extends RequestService {
  constructor(protected http: AuthHttp) {
    super(http)
  }

  login(email: string, password: string): Observable<User> {
    let body = JSON.stringify({email, password});

    return this.post("core/login", body);
  }
}
