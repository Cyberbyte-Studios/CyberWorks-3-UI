import { RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { LoginComponent } from './index';

export const LoginRoutes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent,
    directives: [ REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES ]
  },
];
