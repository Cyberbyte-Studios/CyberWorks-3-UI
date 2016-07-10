import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dash.service';
import { Dashboard } from '../models/dash';
import { FORM_DIRECTIVES } from '@angular/forms';
import { CORE_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  templateUrl: 'dash.component.html',
  providers: [DashboardService, CHART_DIRECTIVES]
})
export class LifeDashboardComponent implements OnInit {
  errorMessage: string;
  dashboard: Dashboard;

  public signupData:Array<any>;
  public signupDates:Array<any>;
  public lineChartOptions:any = {
    animation: true,
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  public lineChartColours:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private dashService: DashboardService) {
  }

  ngOnInit() {
    this.getDashboard();
  }

  gotDashboard(dashboard: Dashboard) {
    this.dashboard = dashboard;
    this.dashboard.percentage = this.dashboard.players / 100;

    this.signupData = [
      {data: this.dashboard.signups.count, label: 'New Players'}
    ];

    console.log(this.signupData);
  }

  getDashboard() {
    this.dashService.getDashboard()
      .subscribe(
        dashboard => this.gotDashboard(dashboard),
        error => this.errorMessage = <any>error);
  }

}
