import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAuthenticationService } from './user-authentication.service';

import { UsersMockService } from './users-mock.service';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UserAuthenticationService, UsersMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
