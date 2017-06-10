import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  @Output()
  story = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitStory(event: any, form: any) {
    event.preventDefault();
    this.story.emit(form.value);
    form.reset()
  }

}
