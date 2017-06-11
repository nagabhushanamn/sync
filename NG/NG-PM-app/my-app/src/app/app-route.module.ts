import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule, Route, Routes
} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: "/", pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class AppRouteModule {

}
