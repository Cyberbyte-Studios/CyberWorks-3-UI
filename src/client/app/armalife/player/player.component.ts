import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from './player.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { CORE_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'player.component.html',
  providers: [PlayerService],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PlayerComponent implements OnInit, OnDestroy {
  public errorMessage: string;
  public player: Player;

  private sub: any;

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService) {
  }

  activeLicense(status: number) {
    if (status) {
      return 'btn-primary';
    }
    return 'btn-danger';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.getPlayer(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPlayer(id: number) {
    this.playerService.getPlayer(id)
      .subscribe(
        player => this.player = player,
        error => this.errorMessage = <any>error);
  }

}
