import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-shopping-cart',
  templateUrl: './dialog-shopping-cart.component.html',
  styleUrls: ['./dialog-shopping-cart.component.scss']
})
export class DialogShoppingCartComponent implements OnInit {

  inputTest = [
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.inputTest = JSON.parse(localStorage.getItem('addedProducts') as string)
  }

}
