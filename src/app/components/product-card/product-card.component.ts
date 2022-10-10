import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/products-interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productInfo: IProduct = {} as IProduct;
  @Output() addProductEvent: EventEmitter<any> = new EventEmitter;

  constructor() { 
  }

  ngOnInit(): void {
  }

  /**
   * Función que emite evento con información de producto a agregar al carrito de compras.
   */
  addProduct(){
    this.addProductEvent.emit(this.productInfo);
  }

}
