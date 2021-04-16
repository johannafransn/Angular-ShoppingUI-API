import {Component, OnInit} from '@angular/core';
import {Product} from "../../classmodels/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product-id',
  templateUrl: './detail-product-id.component.html',
  styleUrls: ['./detail-product-id.component.css']
})
export class DetailProductIDComponent implements OnInit {

  productDetail: Product;
  product_id: string = '';

  constructor(private productService: ProductService, private router: ActivatedRoute) { }


  //get the url for each product
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.product_id = params['product_id']; // (+) converts string 'id' to a number


      //subscribe to data from api
      this.productService.getDetails(this.product_id).subscribe((data) => {
        this.productDetail = data;
        console.log(data);

      })
    });
  }





}
