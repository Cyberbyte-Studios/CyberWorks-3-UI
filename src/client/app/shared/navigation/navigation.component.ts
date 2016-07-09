import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { User } from '../../auth/models/user';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'cw-navigation',
  templateUrl: 'navigation.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
  user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
