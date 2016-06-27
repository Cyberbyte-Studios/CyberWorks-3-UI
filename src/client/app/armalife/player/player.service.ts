import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Dashboard } from './dash';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {
  constructor (private http: Http) {}

  private dashUrl = 'https://cyberworks3-api-scollins.c9users.io/api/v1/armalife/dashboard';

  getDashboard (): Observable<Dashboard> {
    return this.http.get(this.dashUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
