import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  inputTest = [
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular1'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular2'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular3'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular4'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular5'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '$366',
      description : 'Excelente celular6'
    },
  ]

  productsAddedArr:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(event:any){
    this.productsAddedArr.push(event)
    console.log(this.productsAddedArr);

    localStorage.setItem('addedProducts', JSON.stringify(this.productsAddedArr)) ;
  }

}
