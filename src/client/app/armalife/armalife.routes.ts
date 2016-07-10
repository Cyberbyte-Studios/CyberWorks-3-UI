import { RouterConfig } from '@angular/router';
import { PlayerComponent, LifeDashboardComponent, PlayersComponent } from './index';
import { AuthGuard } from '../auth/auth.guard';

export const ArmaLifeRoutes: RouterConfig = [
  {
    path: 'life/dashboard',
    component: LifeDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'life/player/:id',
    component: PlayerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'life/players',
    component: PlayersComponent,
    canActivate: [AuthGuard]
  },
];
