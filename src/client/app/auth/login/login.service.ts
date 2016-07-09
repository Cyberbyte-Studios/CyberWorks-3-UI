import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
import { RequestService } from '../../shared/services/request.service';
import { Http } from '@angular/http';

@Injectable()
export class UserService extends RequestService {
  constructor(protected http: Http) {
    super(http)
  }

  login(email: string, password: string): Observable<User> {
    let body = JSON.stringify({email, password});

    return this.post("core/login", body);
  }
}
