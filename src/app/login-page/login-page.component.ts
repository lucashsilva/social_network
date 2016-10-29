import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private join = false;

  constructor(private router: Router, private authenticationService: UserAuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.hasLoggedUser()){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/login'])
    }
  }

  showJoin(): void {
    this.join = !this.join;
  }
}
