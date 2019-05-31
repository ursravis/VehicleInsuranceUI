import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import{OAuthModule} from "angular-oauth2-oidc";

import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatTableModule,
         MatDividerModule, 
         MatStepperModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OktaAuthModule } from '@okta/okta-angular';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatStepperModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    // OktaAuthModule.initAuth({
    //   issuer: environment.openIdIssuer,
    //   redirectUri: environment.openIdRedirectUrl,
    //   clientId: environment.openIdClient,
    //   scope:'openid profile'
    // })
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
