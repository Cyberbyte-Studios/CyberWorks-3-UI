import { provideRouter, RouterConfig } from '@angular/router';
import { AuthRoutes, AuthGuard, LockGuard } from './auth/index';
import { ArmaLifeRoutes } from './armalife/armalife.routes';

const routes: RouterConfig = [
  ...ArmaLifeRoutes,
  ...AuthRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard,
  LockGuard
];
