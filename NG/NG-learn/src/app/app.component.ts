import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  count: number = 100

  ngOnInit() {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  }

  incHandler(event) {
    this.count += event.value;
  }

}
