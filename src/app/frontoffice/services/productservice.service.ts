import { Injectable } from '@angular/core';
// import { detailproduit } from '../model/productdetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
url='http://localhost:3000/ProductTab/'
  constructor( private http:HttpClient) { }
  // getbyIdprod(id:number){
  //   return this.http.get<detailproduit>(this.url+id);
  //  }
}
