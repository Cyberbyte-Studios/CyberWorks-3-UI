import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { LoginRoutes } from "./auth/index";
import { LifeDashboardRoutes, PlayerRoutes } from "./armalife/index";

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LifeDashboardRoutes,
  ...PlayerRoutes,
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
