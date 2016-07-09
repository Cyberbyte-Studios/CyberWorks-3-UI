import { Injectable } from "@angular/core";
import { Response, Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class RequestService {
  constructor(protected http: Http) {
  }

  protected getBaseUrl() {
    return 'https://cyberworks3-api-scollins.c9users.io/api/v1/';
  }

  public post(url: string, body: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.getBaseUrl() + url, body, options)
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
