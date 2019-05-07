import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './customer.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'vi-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer:Customer;
  @ViewChild('myForm')
  myForm: NgForm;
  phoneNumberPattern="^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$";
  constructor() { }

  ngOnInit() {
    this.customer=new Customer();
  }
  createCustomer()
  {
    
  }

}
