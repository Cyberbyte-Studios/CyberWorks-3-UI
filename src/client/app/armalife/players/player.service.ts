import {Injectable} from "@angular/core";
import {Player} from "../models/player";
import {Observable} from "rxjs/Rx";
import {RequestService} from "../../shared/services/request.service";

@Injectable()
export class PlayerService extends RequestService {
  constructor (protected http: Http) {}
  
  getPlayer(id:number):Observable<Player> {
    return this.http.get(this.getUrl(id))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getUrl(id:number) {
    return this.getBaseUrl() + "armalife/player/" + id;
  }
}
