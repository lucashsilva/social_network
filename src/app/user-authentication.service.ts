import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UserAuthenticationService {

  token: string;

  constructor(private router: Router, private http: Http) {
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

  login(email: string, password: string): Observable<boolean>{
    let body = "grant_type=password&username=" + email + "&password=" + password;

    return this.http.post('https://concepta-node-js.herokuapp.com/v1/auth', body)
      .map((response: Response) => {
        if (response.status === 200) {
            this.token = response.json().data.access_token;
            localStorage.setItem('currentUser', JSON.stringify({email: email, token: this.token}));
            return true;
        } else {
          throw new Error("Unauthorized. " + "(" + response.status + ")");
        }
      });
  }


  logout(): void{
     this.token = null;
     localStorage.removeItem('currentUser');

     this.checkCredentials();
   }

}

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {}
}
