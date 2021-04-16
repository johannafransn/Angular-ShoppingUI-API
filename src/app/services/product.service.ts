import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import {Product, ProductObject} from "../classmodels/product";
import {Router} from "@angular/router";

const apiListUrl = 'https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router){}

  // Populate products from API and return obserable
  getProducts(): Observable<ProductObject>{
    return this.http.get<ProductObject>(apiListUrl);
  }

  // Populate products from API and return obserable(For details), match to products id
  getDetails(product_id: string): Observable<Product>{
    return this.http.get<Product>('https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/'+product_id+'/detail');
  }
}
