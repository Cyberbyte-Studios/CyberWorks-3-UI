import { User } from './models/user';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';

export class AuthService {
  static getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  static isLoggedIn(): boolean {
    return tokenNotExpired();
  }
}
