import { RouterConfig } from '@angular/router';

import { PlayerComponent } from './index';

export const PlayerRoutes: RouterConfig = [
  {
    path: 'life/player/:id',
    component: PlayerComponent
  },
];
