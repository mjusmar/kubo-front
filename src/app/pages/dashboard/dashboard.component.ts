import { Component, OnInit} from '@angular/core';
import { IProduct } from 'src/app/models/products-interface';

import { GlobalService } from 'src/app/services/global.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchProduct: string = '';
  inputCategory: string = 'filter';

  productsArrayAll: IProduct[]      = [];
  productsArrayFiltered: IProduct[] = [];

  constructor(
    private globalService: GlobalService,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Función envía la petición para obtener la información de todos los productos.
   */
  getProducts(): void{
    this.requestService.getAllProducts()
    .subscribe(
      (res)=>{
        if(res.status === "success"){
          this.productsArrayAll = res.data;
          this.productsArrayFiltered = res.data;
        }
      }
    )
  }

  /**
   * Función que filtra los productos por categoría
   */
  filterCategory(): void{
    this.productsArrayFiltered = this.productsArrayAll.filter((item: any) => item.prd_categ === this.inputCategory);

    if(this.inputCategory === 'filter'){
      this.productsArrayFiltered  = this.productsArrayAll;
    } 
  }

  /**
   * Función añade el producto seleccionado al carrito de compras y verifica si ya se agregó.
   * @param productInfo la información de producto a añadir
   */
  addProduct(productInfo: IProduct): void{

    if(!this.globalService.globalProducts.some((item:any )=>  { return item.prd_id === productInfo.prd_id   }))
    {
      let product = {
        ...productInfo,
        prd_qty: 1
      }
      this.globalService.globalProducts.push(product);
    }
    else{
      this.globalService.errorMessage('¡Ya agregaste este producto a tu carrito!');
    }
  }

}
