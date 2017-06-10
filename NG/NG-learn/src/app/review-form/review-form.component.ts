import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {


  reviewModel: Review;

  isSelectAll: boolean = false

  items: Array<any> = [
    { id: 1, name: 'item-1' },
    { id: 2, name: 'item-5' },
    { id: 3, name: 'item-3' },
    { id: 4, name: 'item-4' },
    { id: 5, name: 'item-5' }
  ]

  constructor() { }

  ngOnInit() {
    this.reviewModel = new Review('', '');
  }

  toggleAll() {
    this.isSelectAll = !this.isSelectAll;
    console.log(this.isSelectAll);
  }

  submitNewReview(event, form) {
    event.preventDefault();
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }

}
