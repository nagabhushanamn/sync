
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'shop-product',
    templateUrl: './product.component.html',
})
export default class ProductComponent {

    @Input()
    product: any;

    @Output()
    review = new EventEmitter();

    tab: number = 1;

    constructor(private _productService: ProductService) { }

    changeTab(tabIndex: number, event: any) {
        event.preventDefault();

        this._productService.gerReviews(this.product.id)
            .subscribe(resp => {
                this.product.reviews = resp;
            })

        this.tab = tabIndex;
    }
    isTabSelected(tabIndex: number) {
        return this.tab === tabIndex;
    }
    submitNewReview(event: any, form: any, product: any) {
        event.preventDefault();
        this.review.emit({ review: form.value, product });
        form.reset();
    }
    handleReviewDelete(reviewId: string, productId: string) {
        this._productService.deleteReview(reviewId, productId)
            .subscribe(resp => {
                this.product.reviews = this.product.reviews.filter((item: any) => item.id !== reviewId);
            });
    }

}