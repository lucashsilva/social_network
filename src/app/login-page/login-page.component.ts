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
  private loading: boolean;

  constructor(private router: Router, private authenticationService: UserAuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.hasLoggedUser()){

    }else{
      this.router.navigate(['/login'])
    }
  }

  showJoin(): void {
    this.join = !this.join;
  }

  switchLoad():void {
    this.loading = !this.loading;
  }

}
