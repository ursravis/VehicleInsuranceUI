import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomerComponent } from '../customer/customer.component';
import { QuoteResultComponent } from '../quote-result/quote-result.component';

@Component({
  selector: 'vi-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss']
})
export class QuoteRequestComponent implements OnInit {

  @ViewChild('customerComponent') customerComponent: CustomerComponent;
  @ViewChild('quoteResultComponent') quoteResultComponent: QuoteResultComponent;
  constructor() {}

  ngOnInit() {
  }
  stepSelectionChange(event)
  {
    console.log(event);
    if(event.selectedIndex==2)
    {
    this.quoteResultComponent.loadQuotes();
    }
  }
}
