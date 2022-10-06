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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
