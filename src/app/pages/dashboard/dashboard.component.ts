import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { RequestService } from 'src/app/services/request.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchProduct: string   = '';

  productsArrayAll:any = [];
  productsArrayFiltered:any = [];

  inputValue:any = 'filter';

  constructor(
    private globalService: GlobalService,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.requestService.getAllProducts().subscribe(
      (res)=>{
        if(res.status === "success"){
          this.productsArrayAll = res.data;
          this.productsArrayFiltered = res.data;
        }
        
      }
    )
  }

  filterCategory(){
    this.productsArrayFiltered = this.productsArrayAll.filter((item: any) => item.prd_categ === this.inputValue);

    if(this.inputValue === 'filter'){
      this.productsArrayFiltered  = this.productsArrayAll;
    } 
  }

  addProduct(event:any){

    if(!this.globalService.globalProducts.some((item:any )=>  { return item.prd_id === event.prd_id   }))
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
