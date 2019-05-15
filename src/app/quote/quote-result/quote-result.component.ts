import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';



@Component({
  selector: 'quote-result',
  templateUrl: './quote-result.component.html',
  styleUrls: ['./quote-result.component.scss']
})
export class QuoteResultComponent implements OnInit {
  showLoading: boolean;
  quotes: Quote[];
  constructor() {
    this.showLoading = true;

  }
  loadQuotes() {
    this.showLoading = true;
    setTimeout(() => {
      //this.quoteService.getQuotes().subscribe((q) => this.quotes = q);

      var quotes: Quote[] = [];
      quotes.push(new Quote({name:"Quote 1",description:'Base quote', quoteStartDate: new Date("01/06/1986"), quoteEndDate: new Date("01/06/1986"), premium: 12321, coverage: 656555, customerName: "Customer Name" }));
      quotes.push(new Quote({name:"Quote 2",description:'Better quote', quoteStartDate: new Date("01/06/1986"), quoteEndDate: new Date("01/06/1986"), premium: 12321, coverage: 656555, customerName: "Customer Name" }));
      quotes.push(new Quote({name:"Quote 3",description:'Super quote', quoteStartDate: new Date("01/06/1986"), quoteEndDate: new Date("01/06/1986"), premium: 12321, coverage: 656555, customerName: "Customer Name" }));
      quotes.push(new Quote({name:"Quote 4",description:'Awesome quote', quoteStartDate: new Date("01/06/1986"), quoteEndDate: new Date("01/06/1986"), premium: 12321, coverage: 656555, customerName: "Customer Name" }));
      quotes.push(new Quote({name:"Quote 5",description:'Best quote', quoteStartDate: new Date("01/06/1986"), quoteEndDate: new Date("01/06/1986"), premium: 12321, coverage: 656555, customerName: "Customer Name" }));
      this.quotes = quotes;
      this.showLoading = false;
    }, 2000);
  }
  ngOnInit() {

  }

}
export class Quote {
  name:string;
  description:string;
  quoteStartDate: Date;
  quoteEndDate: Date;
  premium: number;
  coverage: number;
  customerName: string;
  public constructor(init?: Partial<Quote>) {
    Object.assign(this, init);
  }
}
