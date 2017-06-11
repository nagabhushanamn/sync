import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProducts() {
    const apiUrl = "http://0.0.0.0:8080/api/products";
    return this._http.get(apiUrl)
      .map(resp => resp.json())
  }
  saveProduct(product) {
    const apiUrl = "http://0.0.0.0:8080/api/products";
    return this._http.post(apiUrl, product)
      .map(resp => resp.json())
  }

}
