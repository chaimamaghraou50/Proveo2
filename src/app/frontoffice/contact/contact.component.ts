import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  positionMap = {
    street: "Proveo Lubricants, P6P5+RGR, Beja",
    num: "123",
    city: "Beja",
    Adress:"zone industrielle, P6P4+M5, Béja",
    Country:"Tunisia"
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}%20%${this.positionMap.Country}&t=&z=20&ie=UTF8&iwloc=&output=embed`;
}
