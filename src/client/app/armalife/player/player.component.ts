import { Component, OnInit } from '@angular/core';
import { Dashboard } from "./dash";
import { DashboardService } from "./dash.service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'dash.component.html',
  providers: [ DashboardService ]
})
export class LifeDashboardComponent implements OnInit {
  errorMessage: string;
  dashboard: Dashboard;

  constructor (private dashService: DashboardService) {}

  ngOnInit() { this.getDashboard(); }

  getDashboard() {
    this.dashService.getDashboard()
      .subscribe(
        dashboard => this.dashboard = dashboard,
        error =>  this.errorMessage = <any>error);
  }

}
