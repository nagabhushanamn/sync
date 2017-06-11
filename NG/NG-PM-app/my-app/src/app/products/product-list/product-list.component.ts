import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(items => {
        this.products = items;
      })
  }

  showProduct(event,id){
    event.preventDefault();
    this.route.navigate([`/products/${id}`]);
  }

}
