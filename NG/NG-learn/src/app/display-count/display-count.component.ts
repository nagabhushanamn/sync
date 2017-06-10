import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.css']
})
export class DisplayCountComponent implements OnInit {

  @Input()
  value: number;

  constructor() { }

  ngOnInit() {
  }

}
