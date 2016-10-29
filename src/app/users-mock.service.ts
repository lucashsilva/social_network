import { Injectable } from '@angular/core';
import { User } from './user-authentication.service';

@Injectable()
export class UsersMockService {
  constructor() {}


  login(email: string, password: string): boolean {
    if(email === "lucas" && password === "password") {
        return true;
    }

    return false;
  }
}
