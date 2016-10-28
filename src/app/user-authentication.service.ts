import { Injectable } from '@angular/core';
import { UsersMockService } from './users-mock.service';

@Injectable()
export class UserAuthenticationService {

  loggedUser = {email: null, token: null};

  constructor(private mock: UsersMockService) { }

  hasLoggedUser(): boolean {
    return this.loggedUser.email != null && this.loggedUser.token != null;
  }

  login(email: string, password: string): boolean {
    let token = this.mock.login(email, password);

    if(token){
      this.loggedUser.email = email;
      this.loggedUser.token = token;

      return true;
    }

    return false;
  }

}

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {}
}
