import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'dash.component.html'
})
export class LifeDashboardComponent {

  private dashUrl = 'armalife/dashboard';

  constructor(private http: Http) { }

  ngOnInit() {
    console.log(this.getStats());
  }

  getStats() {
    return this.http.get(this.dashUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
