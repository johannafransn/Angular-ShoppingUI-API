import { Component, OnInit } from '@angular/core';
import {ProductListComponent} from "../../shopping/product-list/product-list.component";
import {ProductItemComponent} from "../../shopping/product-list/product-item/product-item.component";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }




}
