import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../classmodels/product";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
//ProductListComponent depends on ProductService to get products
export class ProductListComponent implements OnInit {


  //This list is used to loop in html (from Product classmodels)
  productList: Product[] = [];
  searchText: string;


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      console.log(this.productList = data.products);

    })
  }

  //Search function to query our product grid, searching by product name
  Search(){
    //If search box isnt empty, search according to name
    if (this.searchText != "")
    {
      console.log(this.productList);
      this.productList = this.productList.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())});
    }
    //If you search box is empty, return the whole grid
    else if(this.searchText == "")
    {
      this.ngOnInit()
    }

  }




}
