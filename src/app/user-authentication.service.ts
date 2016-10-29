import { Injectable } from '@angular/core';
import { UsersMockService } from './users-mock.service';
import { Router } from '@angular/router';

@Injectable()
export class UserAuthenticationService {

  token: string;

  constructor(private mock: UsersMockService, private router: Router) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.token = currentUser && currentUser.token;
  }

  checkCredentials(){
    if(localStorage.getItem('currentUser') === null || this.token === null){
      this.router.navigate(['/login']);
    }
  }

  hasLoggedUser(): boolean {
    return this.token != null && localStorage.getItem('currentUser') != null;
  }

  login(email: string, password: string): boolean {
    if(this.mock.login(email, password)){
      this.token = "usuario-autenticado";

      localStorage.setItem('currentUser', JSON.stringify({email: email, token: this.token}));

      return true;
    }

    return false;
  }

  logout(): void{
     this.token = null;
     localStorage.removeItem('currentUser');

     location.reload();
   }

}

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {}
}
