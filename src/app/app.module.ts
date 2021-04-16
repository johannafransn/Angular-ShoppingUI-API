import {Input, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/global/searchbar/searchbar.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ProductItemComponent } from './components/shopping/product-list/product-item/product-item.component';
import { ProductListComponent } from './components/shopping/product-list/product-list.component';
import {DetailsPopupComponent} from "./components/shopping/details-popup/details-popup.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogRef} from "@angular/material/dialog";
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailProductIDComponent } from './components/detail-product-id/detail-product-id.component';
import {Product} from "./classmodels/product";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ShoppingComponent,
    ProductItemComponent,
    ProductListComponent,
    DetailsPopupComponent,
    DetailProductIDComponent,
    HomeComponent
  ],
  entryComponents: [DetailsPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'list/:product_id', component: DetailProductIDComponent}

    ]),

  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
