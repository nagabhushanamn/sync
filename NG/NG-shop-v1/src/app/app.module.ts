
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import AppComponent from './app.component';
import ProductComponent from './product/product.component';
import PriceDiscountPipe from './pipes/price-discount.pipe';


@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,ProductComponent,PriceDiscountPipe],
    bootstrap: [AppComponent]
})
class AppModule {

}

export default AppModule;