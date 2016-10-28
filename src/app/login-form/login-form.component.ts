import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private userAuthentication: UserAuthenticationService, private router: Router) { }

  ngOnInit() { }

  login() {
    if(this.userAuthentication.login(this.email, this.password)){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
