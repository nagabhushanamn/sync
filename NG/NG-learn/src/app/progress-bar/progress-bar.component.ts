import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {


  name: string = "Progress Bar"
  progress: number = 0;

  constructor(private _zone: NgZone) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.name = "New Progress Bar"
    // }, 3000);
  }

  processInNGZone() {
    this.progress = 0;
    this.increaseProgress(() => { console.log('Done') });
  }
  processOutsideNGZone() {
    this.progress = 0;
    this._zone.runOutsideAngular(() => {

      this.increaseProgress(() => {
        this._zone.run(() => { "Outside Done..." });
      });

    });
  }

  increaseProgress(callback) {
    this.progress += 1;
    // if (this.progress % 10 === 0) {
    //   this._zone.run(() => { console.log('+10%') });
    // }
    console.log(`progress ${this.progress}%`);
    if (this.progress < 100) {
      setTimeout(() => {
        this.increaseProgress(callback);
      }, 50);
    } else {
      callback();
    }
  }

}



function *generator(){
  yield 123;
  yield 124;
  yield 125;
}


let it=generator();