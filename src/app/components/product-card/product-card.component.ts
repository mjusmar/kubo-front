import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { 
    // this.productInfo = this.inputTest;
  }

  ngOnInit(): void {
  }


}
