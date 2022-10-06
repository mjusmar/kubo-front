import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { DialogShoppingCartComponent } from './dialog-shopping-cart/dialog-shopping-cart.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    DialogShoppingCartComponent
  ],
  exports:[
    ProductCardComponent,
    DialogShoppingCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
