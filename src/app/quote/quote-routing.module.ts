import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    component: QuoteRequestComponent,canActivate:[OktaAuthGuard]
    //canActivate: [RoleGuard], data: { roles: [process.env.CLEARANCE_ROLE, process.env.PRODUCTION_ROLE] },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
