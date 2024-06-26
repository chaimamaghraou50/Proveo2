import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { agriculture } from '../model/agriculture';
import { Observable } from 'rxjs';
import { AgricultureResponse } from '../model/agriculture.response';

@Injectable({
  providedIn: 'root'
})
export class AgricultureService {
private baseUrl="http://localhost:4400/agriculture/getbyidAgriculture/"
  constructor(private http : HttpClient) { }
  // addAgriculture(agriculture: agriculture): Observable<AgricultureResponse> {
  //     return this.http.post<AgricultureResponse>(this.baseUrl, agriculture);
  //   }

     getbyIdagriculture(id:number){
    return this.http.get<agriculture>(this.baseUrl+id);
   }
  }
export { agriculture };

