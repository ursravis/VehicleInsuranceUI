import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'vi-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss']
})
export class QuoteRequestComponent implements OnInit {

  @ViewChild('customerComponent') customerComponent: CustomerComponent;
  constructor() {}

  ngOnInit() {
  }

}
