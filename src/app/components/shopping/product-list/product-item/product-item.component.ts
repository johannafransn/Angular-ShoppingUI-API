import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../../classmodels/product";
import {MatDialog} from "@angular/material/dialog";
import {DetailsPopupComponent} from "../../details-popup/details-popup.component";
import {ProductService} from "../../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;


  constructor(public dialog: MatDialog, private productService: ProductService, private router: Router) { }

  openDialog(){


    //If statement that handles if the user is on mobile or desktop, branch accordingly
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      //if user is on mobile, then route to product id page
      this.router.navigate(['/list', this.productItem.product_id]);
    }else{
      // if user is on desktop, open dialog

      this.productService.getDetails(this.productItem.product_id).subscribe((data) => {
      this.dialog.open(DetailsPopupComponent, {
        data
    });

  })
    }



  }









  ngOnInit(): void {
  }

}
