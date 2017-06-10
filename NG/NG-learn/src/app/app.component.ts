import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  count: number = 100;

  storyList: Array<any> = [
    { name: 'Nag', message: 'today lunch good' },
    { name: 'Praveen', message: 'im sleepy in class' }
  ];

  ngOnInit() {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  }

  incHandler(event) {
    this.count += event.value;
  }

  addNewStory(event) {
    this.storyList.push(event);
  }

}
