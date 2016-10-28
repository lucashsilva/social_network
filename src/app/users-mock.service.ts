import { Injectable } from '@angular/core';
import { User } from './user-authentication.service';

@Injectable()
export class UsersMockService {
  private users: User[];
  private tokens: Map<string, string>;

  constructor() {
    this.users = new Array<User>();
    this.tokens = new Map<string, string>();

    this.users[0] = new User("Lucas Silva", "lucas.henrique125@hotmail.com", "passwordteste");
   }


  login(email: string, password: string):string {
    for(let user of this.users) {
      if(user.email == email && user.password == password) {
        this.tokens[user.email] = "usuario-autenticado";

        return this.tokens[email];
      }
    }

    return null;
  }
}
