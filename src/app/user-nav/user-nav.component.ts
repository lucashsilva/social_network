import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  constructor(private authService: UserAuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
