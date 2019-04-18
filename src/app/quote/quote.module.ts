import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { QuoteService } from './quote.service';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers:[
    QuoteService
  ]
})
export class QuoteModule { }
