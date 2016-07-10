import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RequestService } from '../../shared/services/request.service';
import { Http } from '@angular/http';

@Injectable()
export class LockService extends RequestService {
  constructor(protected http: Http) {
    super(http)
  }

  unlock(id: number, pin: number): Observable<string> {
    let body = JSON.stringify({id, pin});
    return this.post("core/unlock", body);
  }

  lock(): boolean {
    localStorage.removeItem('id_token');
    return true;
  }
}
