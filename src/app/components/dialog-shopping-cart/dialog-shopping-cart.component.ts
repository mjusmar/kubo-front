import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { RequestService } from 'src/app/services/request.service';
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
    private globalService: GlobalService,
    private requestService:RequestService
  ) { }

  ngOnInit(): void {
    this.totalPrice = 0;
    this.cartProducts = this.globalService.globalProducts;

    if(this.cartProducts.length !==0){
      
      this.cartProducts.forEach((element: any) => {
        element.prd_price = parseInt(element.prd_price)
        this.totalPrice += element.prd_price * element.qty;
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
      this.totalPrice += element.prd_price * element.qty;
    });
    this.globalService.globalProducts = this.cartProducts;
  }

  deleteProduct(product: any){
    this.cartProducts = this.cartProducts.filter((item: any) => item.prd_id !== product.prd_id);
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
        this.saveRequest()
      }
    })
  }

  saveRequest(){
    const productsId =  this.globalService.globalProducts.map((item:any) =>{
      return {
        prd_id: item.prd_id,
      }
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

        Swal.fire({
          icon: 'success',
          text:'¡Tu compra ha sido realizada!',
        })
      }
      else{
        this.errorMessage('¡Ocurrio un error para realizar tu compra!');
      }
    },
    (error) => {
      this.errorMessage('¡Ocurrio un error para realizar tu compra!');
    });
  }

  errorMessage(message: string){
    Swal.fire({
      icon: 'error',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

}

