import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dialog-shopping-cart',
  templateUrl: './dialog-shopping-cart.component.html',
  styleUrls: ['./dialog-shopping-cart.component.scss']
})
export class DialogShoppingCartComponent implements OnInit {

  cartProducts: any = [];

  totalPrice: number = 0;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.totalPrice = 0;
    this.cartProducts = this.globalService.globalProducts;
    if(this.cartProducts.lenght !==0){
      
      this.cartProducts.forEach((element: any) => {
        element.price = parseInt(element.price)
        this.totalPrice += element.price * element.qty;
      });

    }
  }

  close(){
        
  }

  changeQty(event: number, product: any){
    this.totalPrice=0;
    console.log(event);
    console.log(product);
    console.log(this.cartProducts);

    product.qty = event;
    this.cartProducts.forEach((element: any) => {
      this.totalPrice += element.price * element.qty;
    });

    this.globalService.globalProducts = this.cartProducts;
  }

  sumPrice(){
    
  }

}
