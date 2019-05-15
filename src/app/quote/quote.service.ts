import { Injectable } from '@angular/core';
import { Customer } from './customer/customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle/vehicle.component';
import { Quote } from './quote-result/quote-result.component';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  customer: Customer;
  vehicles:Vehicle[];
  constructor(private _http: HttpClient) { }
  createCustomer(customer: Customer): Observable<Customer> {
    var cntrServiceUrl = '/service/customer';
    var contractCopy = JSON.parse(JSON.stringify(customer));
    this.customer = customer;
    console.log('calling createCustomer() at ' + cntrServiceUrl + ' for contract: ' + JSON.stringify(contractCopy));

    var body = JSON.stringify(contractCopy);
    return Observable.bind(contractCopy);
    // return this._http.post(cntrServiceUrl, body, {
    //     headers: new Headers({
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + 'sdfsda_fddsf'
    //     })
    // })
    //     .map((response: Response) => {
    //         console.log('ConractService.createContract >> map()')
    //         return this.mapContract(response);
    //     })
    //     .catch(this.handleError);

  }
  getQuotes(): Observable<Quote[]> {
    var cntrServiceUrl = '/service/quote';
    var quotes:Quote[]=[];
    quotes.push(new Quote({quoteStartDate:new Date("01/06/1986"),  quoteEndDate:new Date("01/06/1986"),premium:12321,coverage:656555,customerName:"Customer Name"}));
    quotes.push(new Quote({quoteStartDate:new Date("01/06/1986"),  quoteEndDate:new Date("01/06/1986"),premium:12321,coverage:656555,customerName:"Customer Name"}));
    quotes.push(new Quote({quoteStartDate:new Date("01/06/1986"),  quoteEndDate:new Date("01/06/1986"),premium:12321,coverage:656555,customerName:"Customer Name"}));
    quotes.push(new Quote({quoteStartDate:new Date("01/06/1986"),  quoteEndDate:new Date("01/06/1986"),premium:12321,coverage:656555,customerName:"Customer Name"}));
    quotes.push(new Quote({quoteStartDate:new Date("01/06/1986"),  quoteEndDate:new Date("01/06/1986"),premium:12321,coverage:656555,customerName:"Customer Name"}));
    return Observable.bind(quotes);
  }
  createVehicles(vehicles: Vehicle[]): Observable<Vehicle[]> {
    var cntrServiceUrl = '/service/vehicle';
    this.vehicles = vehicles;
    console.log('calling createVehicles() at ' + cntrServiceUrl + ' for vehicle: ' + JSON.stringify(vehicles));

    var body = JSON.stringify(vehicles);
    return Observable.bind(vehicles);

  }
  private handleError(error: Response) {
    // console.error('error!:' + error.json() ? error.json() : error.text);
    return Observable.throw(error || 'Server error');
  }
}
