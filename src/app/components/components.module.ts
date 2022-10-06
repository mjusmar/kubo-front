import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { DialogShoppingCartComponent } from './dialog-shopping-cart/dialog-shopping-cart.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { IncrementerComponent } from './incrementer/incrementer.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    DialogShoppingCartComponent,
    IncrementerComponent,
  ],
  exports:[
    ProductCardComponent,
    DialogShoppingCartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ]
})
export class ComponentsModule { }
