import { RouterConfig } from '@angular/router';
import { LoginComponent, LockComponent } from './index';
import { LockGuard } from './lock/lock.guard';

export const AuthRoutes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lock',
    component: LockComponent,
    canActivate: [LockGuard]
  },
];
