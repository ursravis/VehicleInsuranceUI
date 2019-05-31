import { Component, OnInit } from '@angular/core';
// import { OktaAuthService } from '@okta/okta-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'vi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Vehicle Insurance';
  isAuthenticated: boolean;
  userName:string;
  
  constructor(private oauthService: OAuthService) {
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean)=>{ 
    //     this.isAuthenticated = isAuthenticated;
    //     this.setUserName();
    //   }
    // );
    this.configureWithNewConfigApi();
  }
  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
  ngOnInit() {
    // this.oktaAuth.isAuthenticated().then((auth) => {
    //   this.isAuthenticated = auth;

    // });
    
    //this.setUserName();
  }
  get givenName() {
    let claims = this.oauthService.getIdentityClaims();
  
    if (!claims) return null;
    return claims['name'];
}
// setUserName(){
//   this.oktaAuth.getUser().then((user) =>{
//     console.log('user');
//     console.log(user);
//     this.userName=user?user.name:'';
//   });
// }
  login() {
    this.oauthService.initImplicitFlow();
    //this.oktaAuth.loginRedirect();
  }

  logout() {
    this.oauthService.logOut();
    //this.oktaAuth.logout('/');
  }
}
