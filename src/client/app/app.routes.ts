import { provideRouter, RouterConfig } from '@angular/router';
import { AuthRoutes } from './auth/auth.routes';
import { AuthGuard } from './auth/auth.guard';
import { ArmaLifeRoutes } from './armalife/armalife.routes';

const routes: RouterConfig = [
  ...ArmaLifeRoutes,
  ...AuthRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard
];
