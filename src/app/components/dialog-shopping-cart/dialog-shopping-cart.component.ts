import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/global.service';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-dialog-shopping-cart',
  templateUrl: './dialog-shopping-cart.component.html',
  styleUrls: ['./dialog-shopping-cart.component.scss']
})
export class DialogShoppingCartComponent implements OnInit {

  cartProducts: Array<any> = [];

  totalPrice: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogShoppingCartComponent>,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.totalPrice = 0;
    this.cartProducts = this.globalService.globalProducts;

    if(this.cartProducts.length !==0){
      
      this.cartProducts.forEach((element: any) => {
        element.price = parseInt(element.price)
        this.totalPrice += element.price * element.qty;
      });

    }
  }

  close(){
    this.dialogRef.close();
  }

  changeQty(event: number, product: any){
    product.qty = event;
    this.sumPrice();
  }

  sumPrice(){
    this.totalPrice=0;

    this.cartProducts.forEach((element: any) => {
      this.totalPrice += element.price * element.qty;
    });
    this.globalService.globalProducts = this.cartProducts;
  }

  deleteProduct(product: any){
    this.cartProducts = this.cartProducts.filter((item: any) => item.id !== product.id);
    this.sumPrice();
  }

  buyProduct(){
    Swal.fire({
      title: '¿Estas seguro que deseas realizar la compra?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.globalService.globalProducts = [];
        this.dialogRef.close();
        Swal.fire({
          icon: 'success',
          text:'¡Tu compra ha sido realizada!',
        })
      }
    })
  }

}
