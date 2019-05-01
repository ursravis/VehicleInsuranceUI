import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { QuoteService } from './quote.service';
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatStepperModule, MatButton, MatButtonModule, MatTableModule } from '@angular/material';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CustomerComponent, QuoteRequestComponent, VehicleComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers:[
    QuoteService
  ]
})
export class QuoteModule { }
