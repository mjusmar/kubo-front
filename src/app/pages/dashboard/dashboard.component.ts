import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  inputTest = [
    {
      id: 'PRD_1',
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular1'
    },
    {
      id: 'PRD_2',
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular3'
    },
    {
      id: 'PRD_3',
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular4'
    },
    {
      id: 'PRD_4',
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular5'
    },
    {
      id: 'PRD_5',
      category: 'technology',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'iPhone X',
      price : '366',
      description : 'Excelente celular6'
    },
    {
      id: 'PRD_6',
      category: 'food',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Fresa',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      id: 'PRD_7',
      category: 'food',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Piña',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      id: 'PRD_8',
      category: 'food',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Mango',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      id: 'PRD_9',
      category: 'home',
      image : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp",
      name : 'Escritorio',
      price : '366',
      description : 'Excelente celular6'
    },
    {
      id: 'PRD_10',
      category: 'home',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Cama',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      id: 'PRD_11',
      category: 'home',
      image : "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name : 'Televisor',
      price : '6',
      description : 'El mango es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivare'
    },
    {
      id: 'PRD_12',
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

    if(!this.globalService.globalProducts.some((item:any )=>  { return item.id === event.id   }))
    {
      let product = {
        ...event,
        qty: 1
      }
      this.globalService.globalProducts.push(product);

    }
    else{
      Swal.fire({
        icon: 'error',
        text: '¡Ya agregaste este producto a tu carrito!',
        showConfirmButton: false,
        timer: 1000
      })
    }
    
  }
 

}
