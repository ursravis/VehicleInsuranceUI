import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { QuoteService } from './quote.service';
import { MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatStepperModule, MatButton, MatButtonModule, MatTableModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuoteResultComponent } from './quote-result/quote-result.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomerComponent, QuoteRequestComponent, VehicleComponent, QuoteResultComponent],
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
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers:[
    QuoteService
  ]
})
export class QuoteModule { }
