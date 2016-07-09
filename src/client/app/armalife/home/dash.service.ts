import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dashboard } from '../models/dash';
import { RequestService } from '../../shared/services/request.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class DashboardService extends RequestService {
  constructor(protected http: AuthHttp) {
    super(http)
  }

  getDashboard(): Observable<Dashboard> {
    return this.get('armalife/dashboard');
  }
}