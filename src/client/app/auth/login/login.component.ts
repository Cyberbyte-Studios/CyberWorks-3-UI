import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {User} from "../models/user";
import { UserService } from "./login.service";

@Component({
  moduleId: module.id,
  selector: 'cw-login',
  providers: [ UserService ],
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  errorMessage: string;
  user = new User(null, null, null);

  constructor (
    private userService: UserService
  ) { }

  onSubmit() {
    console.log(this.user);
    this.login(this.user.email, this.user.password);
  }

  handleError() {

  }

  successfulLogin(user: User) {
    this.user = user;
  }

  login(email: string, password: string) {
    this.userService.login(email, password)
      .subscribe(
        user => this.successfulLogin(user),
        error =>  this.errorMessage = <any>error);
  }
}
