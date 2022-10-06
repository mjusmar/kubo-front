import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  // inputTest = {

  //   image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
  //   name : 'iPhone X',
  //   price : '$366',
  //   description : 'Excelente celular',
  // }

  // @Input() image: string = '';
  // @Input() name : string = '';
  // @Input() price: string = '';
  // @Input() description: string = '';


  @Input() productInfo: any;
  @Output() addProductEvent: EventEmitter<any> = new EventEmitter;

  constructor() { 
    // this.productInfo = this.inputTest;
  }

  ngOnInit(): void {
  }

  addProduct(){
    this.addProductEvent.emit(this.productInfo);
  }

}
