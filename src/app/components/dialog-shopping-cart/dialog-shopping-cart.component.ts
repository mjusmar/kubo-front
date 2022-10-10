import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IProduct } from 'src/app/models/products-interface';

import { GlobalService } from 'src/app/services/global.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-dialog-shopping-cart',
  templateUrl: './dialog-shopping-cart.component.html',
  styleUrls: ['./dialog-shopping-cart.component.scss']
})
export class DialogShoppingCartComponent implements OnInit {

  totalPrice: number = 0;
  cartProducts: Array<IProduct> = [];

  constructor(
    public dialogRef      : MatDialogRef<DialogShoppingCartComponent>,
    private globalService : GlobalService,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.initShoppingCart();
  }

  close(){
    this.dialogRef.close();
  }

  /**
   * Función que toma los elementos sellecionados para la compra y calcula su precio total.
   */
  initShoppingCart(): void{
    this.totalPrice = 0;
    this.cartProducts = this.globalService.globalProducts;

    if(this.cartProducts.length !==0){
      
      this.cartProducts.forEach((element: any) => {
        element.prd_price = parseInt(element.prd_price)
        this.totalPrice += element.prd_price * element.prd_qty;
      });
    }
  }

  /**
   * Función que incrementa o decrementa la cantidad de el producto y cambia el precio total.
   * @param currentQty la cantidad actual del producto
   * @param product el producto seleccionado para cambiar dicha cantidad
   */
  changeQty(currentQty: number, product: IProduct): void{
    product.prd_qty = currentQty;
    this.sumPrice();
  }

  /**
   * Función que calcula el valor total de los productos seleccionados.
   */
  sumPrice(): void{
    this.totalPrice = 0;

    this.cartProducts.forEach((element: any) => {
      this.totalPrice += element.prd_price * element.prd_qty;
    });

    this.globalService.globalProducts = this.cartProducts;
  }

  /**
   * Función que elimina el producto seleccionado de carrito de compras y vuelve a calcular el precio total.
   * @param product el producto seleccionado a elimiar
   */
  deleteProduct(product: IProduct): void{
    this.cartProducts = this.cartProducts.filter((item: any) => item.prd_id !== product.prd_id);
    this.sumPrice();
  }

  /**
   * Función que abre una alerta para confirmar la compra del producto.
   */
  buyProduct(): void{
    this.globalService.questionMessage('¿Estas seguro que deseas realizar la compra?')
    .then((result) => 
    {
      if (result.isConfirmed) {
        this.saveProductsOrder()
      }
    })
  }

  /**
   * Función que envía la peticion para guardar la orden, los productos seleccionados y el precio total
   */
  saveProductsOrder(): void{
    const productsId =  this.globalService.globalProducts.map(
      (item: any) =>{
        return {  prd_id: item.prd_id }
    })

    const reqData = {
      prodArray: productsId,
      ord_total: this.totalPrice.toString(),
    }

    this.requestService.saveProductBuy(reqData)
    .subscribe((res) => {

      if(res.status === "success"){

        this.globalService.globalProducts = [];
        this.dialogRef.close();

        this.globalService.succesMesagge('¡Tu compra ha sido realizada!')
      }
      else{
        this.globalService.errorMessage('¡Ocurrio un error para realizar tu compra!');
      }
    },
    (error) => {
      this.globalService.errorMessage('¡Ocurrio un error para realizar tu compra!');
    });
  }

}

