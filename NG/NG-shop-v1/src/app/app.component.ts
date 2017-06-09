
import { Component } from '@angular/core';

@Component({
    selector: 'shop-app',
    template: `
        <div class="container">
            <div class="page-header">{{appName}}</div>

            <div class="list-group">
                 <div *ngFor="let product of products|slice:0:10;let idx=index;let isFirst=first" class="list-group-item">
                       <shop-product [product]="product"></shop-product> 
                </div>    
            </div>
           
        </div>
    `
})
class AppComponent {
    appName: string = "shoping-IT";
    products: any[] = [
        {
            name: 'Laptop',
            price: 198000,
            description: 'New Mac pro',
            canBuy: true,
            makeDate: Date.now(),
            discount: 10000,
            images: [
                { thumb: '', full: 'images/Laptop.png' }
            ],
            reviews:[
                {stars:5,author:'nag@gmail.com',body:'good one'},
                {stars:3,author:'indu@gmail.com',body:'costly one'}
            ]
        },
        {
            name: 'Mobile',
            price: 18000,
            description: 'New mobile',
            canBuy: true,
            makeDate: Date.now(),
            images: [
                { thumb: '', full: 'images/Mobile.png' }
            ],
            reviews:[
                {stars:5,author:'nag@gmail.com',body:'good one'},
                {stars:3,author:'indu@gmail.com',body:'costly one'}
            ]
        }
    ];



}

export default AppComponent;