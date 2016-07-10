import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dash.service';
import { Dashboard } from '../models/dash';

@Component({
  moduleId: module.id,
  templateUrl: 'dash.component.html',
  providers: [DashboardService]
})
export class LifeDashboardComponent implements OnInit {
  errorMessage: string;
  dashboard: Dashboard;

  constructor(private dashService: DashboardService) {
  }

  ngOnInit() {
    this.getDashboard();
  }

  gotDashboard(dashboard: Dashboard) {
    this.dashboard = dashboard;
    this.dashboard.percentage = this.dashboard.players / 100;
  }

  getDashboard() {
    this.dashService.getDashboard()
      .subscribe(
        dashboard => this.gotDashboard(dashboard),
        error => this.errorMessage = <any>error);
  }

}
