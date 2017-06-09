
import { Component, Input } from '@angular/core';

@Component({
    selector: 'shop-product',
    templateUrl: './product.component.html'
})
export default class ProductComponent {

    @Input()
    product: any;

    tab: number = 1;
    changeTab(tabIndex: number, event: any) {
        event.preventDefault();
        this.tab = tabIndex;
    }
    isTabSelected(tabIndex: number) {
        return this.tab === tabIndex;
    }

}