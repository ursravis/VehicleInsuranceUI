import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'vi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Vehicle Insurance';
  isAuthenticated: boolean;
  userName:string;
  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)=>{ 
        this.isAuthenticated = isAuthenticated;
        this.setUserName();
      }
    );
  }

  ngOnInit() {
    this.oktaAuth.isAuthenticated().then((auth) => {
      this.isAuthenticated = auth;

    });
    this.setUserName();
  }
setUserName(){
  this.oktaAuth.getUser().then((user) =>{
    console.log('user');
    console.log(user);
    this.userName=user?user.email:'';
  });
}
  login() {
    this.oktaAuth.loginRedirect();
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
