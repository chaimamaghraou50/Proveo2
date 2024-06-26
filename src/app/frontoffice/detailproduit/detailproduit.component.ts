
import { Component, OnInit } from '@angular/core';
import { GenerateurpdfService } from './../services/generateurpdf.service';
import { ActivatedRoute } from '@angular/router';

import { ProduitsmoteuressencesService } from '../services/produitsmoteuressences.service';
import { moteuressence } from '../model/moteuressencemodel';
@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrl: './detailproduit.component.css'
})
export class DetailproduitComponent implements OnInit {
  public essence: moteuressence;

  constructor(private pdfservice : GenerateurpdfService , private currentRoute: ActivatedRoute , private essenceservice : ProduitsmoteuressencesService){}






   ngOnInit(): void {


     let id =this.currentRoute.snapshot.params['id'];
     this.essenceservice.getbyIdessence(id).subscribe((data)=>this.essence=data);

     this.essence= new moteuressence();


   }


  // generatePdf() {
  //    const id = this.// Replace with the selected product id
  //   this.pdfservice.generatePdf(id).subscribe((response) => {
  //      const blob = new Blob([response], { type: 'application/pdf' });
  //     const url = window.URL.createObjectURL(blob);
  //      const a = document.createElement('a');
  //      document.body.appendChild(a);
  //      a.setAttribute('style', 'display: none');
  //      a.href = url;
  //      a.download = `product_${id}.pdf`;
  //      a.click();
  //      window.URL.revokeObjectURL(url);
  //      a.remove();
  //    });




// }

generatePdf(): void {
  let id =this.currentRoute.snapshot.params['id'];
  this.pdfservice.generatePdf(id).subscribe((pdfBlob: Blob) => {
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = 'essence.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  });
}
}
