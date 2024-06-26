import { Component, OnInit } from '@angular/core';
import { moteuressence } from '../../model/moteuressencemodel';
import { ProduitsmoteuressencesService } from '../../services/produitsmoteuressences.service';
@Component({
  selector: 'app-moteurs-essence',
  templateUrl: './moteurs-essence.component.html',
  styleUrl: './moteurs-essence.component.css'
})
export class MoteursEssenceComponent implements OnInit {
  public MoteurEssence: moteuressence[];
constructor(private prdMoteurEssenceService: ProduitsmoteuressencesService){}

ngOnInit(): void {
  this.prdMoteurEssenceService.getallmoteuressence().subscribe((data:moteuressence[])=>{this.MoteurEssence=data});
}


}
