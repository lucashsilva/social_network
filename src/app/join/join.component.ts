import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private router: Router, private authenticationService: UserAuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.hasLoggedUser()){
      this.router.navigate(['/']);
    }
  }

}
