import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Router } from '@angular/router';
import { PlayersService } from './players.service';

@Component({
  moduleId: module.id,
  templateUrl: 'players.component.html',
  providers: [PlayersService],
})
export class PlayersComponent implements OnInit {
  players: Player[];
  search: string;
  limit: number = 25;
  
  limits: number[] = [
    10, 25, 50, 100, 250
  ];

  constructor(private router: Router,
              private playersService: PlayersService) {
  }

  changeLimit(limit: number) {
    this.limit = limit;
    console.log(limit);
    this.getPlayers();
  }

  goToPlayer(id: number) {
    this.router.navigate(['/life/player/' + id]);
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playersService.getPlayers(this.limit, this.search)
      .subscribe(
        players => this.players = players,
        error => this.errorMessage = <any>error);
  }
}