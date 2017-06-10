import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { DisplayCountComponent } from './display-count/display-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewFormComponent,
    HitButtonComponent,
    DisplayCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
