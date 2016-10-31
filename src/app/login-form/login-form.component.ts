import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  private errorMessage: string;
  @Output() loading = new EventEmitter();



  constructor(private authService: UserAuthenticationService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.loading.emit();

    this.authService.login(this.email, this.password).subscribe(result => {
       if(result){
         this.router.navigate(['/']);
       }
     },
    (err) => {
      this.errorMessage = "Email ou senha incorretos. Por favor, tente novamente.";
    });

    this.loading.emit();

  }
}
