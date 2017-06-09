"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.appName = "shoping-IT";
        this.products = [
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
                reviews: [
                    { stars: 5, author: 'nag@gmail.com', body: 'good one' },
                    { stars: 3, author: 'indu@gmail.com', body: 'costly one' }
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
                reviews: [
                    { stars: 5, author: 'nag@gmail.com', body: 'good one' },
                    { stars: 3, author: 'indu@gmail.com', body: 'costly one' }
                ]
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'shop-app',
        template: "\n        <div class=\"container\">\n            <div class=\"page-header\">{{appName}}</div>\n\n            <div class=\"list-group\">\n                 <div *ngFor=\"let product of products|slice:0:10;let idx=index;let isFirst=first\" class=\"list-group-item\">\n                       <shop-product [product]=\"product\"></shop-product> \n                </div>    \n            </div>\n           \n        </div>\n    "
    })
], AppComponent);
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map