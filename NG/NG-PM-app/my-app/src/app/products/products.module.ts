import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRouteModule } from './products-routing.module';
import {
  RouterModule, Route, Routes
} from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    // DataTableModule,
    ReactiveFormsModule,
    ProductsRouteModule
  ],
  declarations: [ProductListComponent, ProductFormComponent, ProductDetailComponent],
  providers: [ProductService],
  exports: [RouterModule]
})
export class ProductsModule {

}
