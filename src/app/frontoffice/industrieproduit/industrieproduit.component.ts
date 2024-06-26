import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-industrieproduit',
  templateUrl: './industrieproduit.component.html',
  styleUrl: './industrieproduit.component.css'
})
export class IndustrieproduitComponent {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id')); } // You can use the 'id' to retrieve and display the corresponding product information.

  ngOnInit(): void {
  }
}
