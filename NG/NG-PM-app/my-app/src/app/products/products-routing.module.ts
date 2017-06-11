import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule, Route, Routes
} from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component'
import {ProductDetailComponent} from './product-detail/product-detail.component'



const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'product-new', component: ProductFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: []
})
export class ProductsRouteModule {

}
