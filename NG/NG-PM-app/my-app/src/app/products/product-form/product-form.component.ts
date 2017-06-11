import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ProductService } from '../product.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

  productForm: FormGroup;

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      price: ['1000'],
      description: []
    });
  }

  handleSubmit() {
    let product = Object.assign({}, this.productForm.value, { makeDate: Date.now() });
    this.productService.saveProduct(product)
      .subscribe(product => {
        this.productForm.reset();
        this.router.navigate(['products', { id: product.id }])
      }, error => {
        console.log(error)
      });
  }

}
