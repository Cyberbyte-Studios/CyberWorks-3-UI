import { Licence } from "./license";

export class Player {
  id: number;
  name: string;
  playerid: string;
  cash: number;
  bankacc: number;
  coplevel: number;
  mediclevel: number;
  civ_licenses: Licence[];
  med_licenses: Licence[];
  cop_licenses: Licence[];
  arrested: number;
  adminlevel: number;
  donorlevel: number;
  civ_alive: number;
  insert_time: string;
  last_seen: string;
}