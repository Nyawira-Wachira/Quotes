import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'A winner is a dreamer who never gives up.', 'Nelson Mandela',new Date(2022, 3,9)),
    new Quote(2,'Yesterday is history, tomorrow is a mystery, today is a gift...that is why it is called present.',' Master Oogway', new Date(2022, 3, 10)),
    new Quote(3,'The mark of a true hero is humility.','Master Shifu', new Date(2022, 3, 15))
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDislike, index){
    if (isDislike) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
