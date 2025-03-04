import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'The greatest glory in living lies not in never falling, but in rising every time we fall.', '~Nelson Mandela', 'Linda Jones', new Date(2022, 3,14), 0,0),
    new Quote(2, 'Yesterday is history, tomorrow is a mystery, today is a gift...  that is why it is called present.', '~Master Oogway', 'Jack Kings', new Date(2022, 3,9), 0,0),
    ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.author = quote.author;
    quote.name = quote.name;
    quote.creationDate= new Date(quote.creationDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDislike, index){
    if (isDislike) {
      this.quotes.splice(index,1);
    }
  }
  
  likeButtonClick(i) {
    this.quotes[i].likes++;
  }
  dislikeButtonClick(i){
    this.quotes[i].dislikes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
