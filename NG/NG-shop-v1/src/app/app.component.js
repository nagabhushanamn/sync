"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./services/product.service");
var AppComponent = (function () {
    function AppComponent(_productService) {
        this._productService = _productService;
        this.appName = "shoping-IT";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let self = this;
        this._productService.getAllProducts()
            .subscribe(function (items) {
            _this.products = items;
        });
    };
    AppComponent.prototype.handleNewReview = function (event) {
        this._productService.postNewReview(event.review, event.product.id)
            .subscribe(function (review) {
            if (event.product.reviews) {
                event.product.push(review);
            }
            else {
                event.product.reviews = [review];
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'shop-app',
        template: "\n        <div class=\"container\">\n            <div class=\"page-header\">{{appName}}</div>\n\n            <div class=\"list-group\">\n                 <div *ngFor=\"let product of products|slice:0:10;let idx=index;let isFirst=first\" class=\"list-group-item\">\n                       <shop-product [product]=\"product\" (review)=\"handleNewReview($event)\"></shop-product> \n                </div>    \n            </div>\n           \n        </div>\n    ",
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppComponent);
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map