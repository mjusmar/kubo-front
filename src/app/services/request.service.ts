import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly url = 'http://localhost:3000';

  constructor(
    private readonly http:HttpClient
  ) { }

  getAllProducts(): Observable <any> {    
    return this.http.get<any>(`${this.url}/products`);
  }

  saveProductBuy(data:any): Observable <any> {    
    return this.http.post<any>(`${this.url}/products`, data);
  }

}
