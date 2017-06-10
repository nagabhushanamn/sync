import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryFormComponent } from './story-form/story-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewFormComponent,
    HitButtonComponent,
    DisplayCountComponent,
    StoryComponent,
    StoryListComponent,
    StoryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
