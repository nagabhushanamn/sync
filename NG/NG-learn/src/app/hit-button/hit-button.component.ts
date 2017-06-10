import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {

  @Input()
  label: number;

  @Output()
  hit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.hit.emit({value:this.label})
  }
}
