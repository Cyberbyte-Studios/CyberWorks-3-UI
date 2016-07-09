import { RouterConfig } from '@angular/router';
import { PlayerComponent, LifeDashboardComponent } from './index';
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
];
