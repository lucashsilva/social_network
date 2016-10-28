import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../user-authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private authenticationService: UserAuthenticationService) { }

  ngOnInit() {
    if(!this.authenticationService.hasLoggedUser()){
      this.router.navigate(['/login']);
    }
  }

}
