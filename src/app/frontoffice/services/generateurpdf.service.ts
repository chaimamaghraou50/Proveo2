import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateurpdfService {
  apiURL='http://localhost:4400/pdfgenerator/productpdfessence'
  constructor(private http: HttpClient) { }

  generatePdf(id: any): Observable<Blob> {
    const url = 'http://localhost:4400/pdfgenerator/generate-pdfs/';
    return this.http.get(url+id ,{ responseType: 'blob' });
  }
}
