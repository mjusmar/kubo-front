import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _globalProducts:Array<any> = [];

  set globalProducts(products:any) {
    this._globalProducts = products;
  }
  get globalProducts():any{
    return this._globalProducts;
  }

  constructor() { }
}
