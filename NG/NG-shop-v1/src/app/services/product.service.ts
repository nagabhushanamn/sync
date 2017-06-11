import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    constructor(private _http: Http) { }

    getAllProducts(): any {
        const apiUrl = "http://10.16.160.85:8080/api/products";
        // let originalStream: Observable<Response> = this._http.get(apiUrl);
        // let newStream=originalStream.map(resp=>resp.json());
        return this._http.get(apiUrl)
            .map(resp => resp.json());
    }

    gerReviews(prodId: string) {
        const apiUrl = `http://10.16.160.85:8080/api/products/${prodId}/reviews`;
        return this._http.get(apiUrl)
            .map(resp => resp.json());;
    }

    postNewReview(review: any, prodId: string) {
        const apiUrl = `http://10.16.160.85:8080/api/products/${prodId}/reviews`;
        return this._http.post(apiUrl, review)
            .map(resp => resp.json());;
    }

    deleteReview(reviewId: string, productId: string) {
        const apiUrl = `http://10.16.160.85:8080/api/products/${productId}/reviews/${reviewId}`;
        return this._http.delete(apiUrl)
            .map(resp => resp.json());;
    }


}