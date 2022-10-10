import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { IProduct } from '../models/products-interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _globalProducts: Array<IProduct> = [];

  set globalProducts(products: Array<IProduct> ) {
    this._globalProducts = products;
  }
  get globalProducts(): Array<IProduct>{
    return this._globalProducts;
  }

  constructor() { }

  /**
   * Alerta de error
   */
  errorMessage(message: string): void{
    Swal.fire({
      icon: 'error',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  /**
   * Alerta de éxito
   */
  succesMesagge(message: string): void{
    Swal.fire({
      icon: 'success',
      text: message,
      timer: 2000
    })
  }

  /**
   * Alerta de pregunta
   */
  questionMessage(message: string): Promise<SweetAlertResult>{
    return Swal.fire({
      title: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    })
  }

}
