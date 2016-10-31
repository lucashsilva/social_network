import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAuthenticationService } from './user-authentication.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { JoinComponent } from './join/join.component';
import { PublicNavComponent } from './public-nav/public-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainComponent,
    LoginFormComponent,
    FooterComponent,
    JoinComponent,
    PublicNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
