import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class RequestService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(protected http: AuthHttp) {

  }

  protected getBaseUrl() {
    return 'https://cyberworks3-api-scollins.c9users.io/api/v1/';
  }

  public get(url: string) {
    return this.http.get(this.getBaseUrl() + url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public post(url: string, body: string) {
    return this.http.post(this.getBaseUrl() + url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || {};
  }

  protected handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
