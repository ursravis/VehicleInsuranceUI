import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  { path: 'implicit/callback', component: OktaCallbackComponent },
  {
    path: 'quote',
    loadChildren: './quote/quote.module#QuoteModule',canActivate:[OktaAuthGuard]
  },  
  {
    path:'',
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
