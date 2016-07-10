import { Component } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from '../models/user';
import { UserService } from './login.service';

@Component({
  moduleId: module.id,
  selector: 'cw-login',
  providers: [UserService, ToastsManager],
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  errorMessage: string;
  user = new User();

  constructor(private userService: UserService,
              private toastr: ToastsManager) {
  }

  onSubmit() {
    console.log(this.user);
    this.login(this.user.email, this.user.password);
  }

  handleError() {

  }

  successfulLogin(user: User) {
    this.user = user;
    localStorage.setItem('id_token', user.token);
    this.user.token = null;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.toastr.success(user.token, 'Logged in');
  }

  login(email: string, password: string) {
    this.userService.login(email, password)
      .subscribe(
        user => this.successfulLogin(user),
        error => this.errorMessage = <any>error);
  }
}
