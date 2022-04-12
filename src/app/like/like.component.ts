import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  numberofLikes : number = 0;
  numberofDislikes : number = 0;


  likeButtonClick() {
    this.numberofLikes++;
  }
  dislikeButtonClick(){
    this.numberofDislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
