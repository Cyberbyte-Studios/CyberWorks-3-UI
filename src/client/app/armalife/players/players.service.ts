import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable } from 'rxjs/Rx';
import { RequestService } from '../../shared/services/request.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class PlayersService extends RequestService {
  constructor(protected http: AuthHttp) {
    super(http)
  }

  getPlayers(limit?: number, search?: string): Observable<Player[]> {
    return this.get('armalife/player/table/' + limit + '?search=' + search);
  }
}
