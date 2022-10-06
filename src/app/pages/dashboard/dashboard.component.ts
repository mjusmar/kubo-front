import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/global.service';

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
      price : '366',
      description : 'Excelente celular1'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular3'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular4'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular5'
    },
    {
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular6'
    },
    {
      category: 'food',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Fresa',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      category: 'food',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Piña',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      category: 'food',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Mango',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      category: 'home',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'Escritorio',
      price : '366',
      description : 'Excelente celular6'
    },
    {
      category: 'home',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Cama',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      category: 'home',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Televisor',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      category: 'home',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Mesa',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
  ]

  searchProduct: string   = '';

  productsArrayAll:any = [];
  productsArrayFiltered:any = [];

  productsAddedArr:any = [];

  inputValue:any = 'filter';

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.productsArrayAll = this.inputTest;
    this.productsArrayFiltered = this.inputTest;
  }

  filterCategory(){
    console.log(this.inputValue);

    this.productsArrayFiltered = this.productsArrayAll.filter((item: any) => item.category === this.inputValue);

    if(this.inputValue === 'filter'){
      this.productsArrayFiltered  = this.productsArrayAll;
    } 
  }

  addProduct(event:any){
    let product = {
      ...event,
      qty: 1
    }
    this.productsAddedArr.push(product);
    this.globalService.globalProducts = this.productsAddedArr;
  }
 

}
