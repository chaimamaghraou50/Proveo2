import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { moteuressence } from '../model/moteuressencemodel';
@Injectable({
  providedIn: 'root'
})
export class ProduitsmoteuressencesService {

  constructor(private http:HttpClient) { }
  getbyIdessence(id:number){
    return this.http.get<moteuressence>('http://localhost:4400/moteuressence/getbyidMoteuressence/'+id);
   }

  getallmoteuressence(){
    return this.http.get<moteuressence[]>('http://localhost:4400/moteuressence/getallmoteuressence');
  }
  pdfessence(id:number){
    return this.http.get<moteuressence>('http://localhost:4400/pdfgenerator/productpdfessence/'+id);
   }

}
