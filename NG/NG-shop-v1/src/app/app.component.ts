
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
    selector: 'shop-app',
    template: `
        <div class="container">
            <div class="page-header">{{appName}}</div>

            <div class="list-group">
                 <div *ngFor="let product of products|slice:0:10;let idx=index;let isFirst=first" class="list-group-item">
                       <shop-product [product]="product" (review)="handleNewReview($event)"></shop-product> 
                </div>    
            </div>
           
        </div>
    `,
    providers: [ProductService]
})
class AppComponent {

    appName: string = "shoping-IT";
    products: any[];

    constructor(private _productService: ProductService) {
    }

    ngOnInit() {
        // let self = this;
        this._productService.getAllProducts()
            .subscribe((items: any) => {
                this.products = items;
            });
    }

    handleNewReview(event: any) {
        this._productService.postNewReview(event.review, event.product.id)
            .subscribe(review => {
                if (event.product.reviews) {
                    event.product.push(review);
                } else {
                    event.product.reviews = [review];
                }
            });

    }



}

export default AppComponent;