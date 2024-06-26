
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './frontoffice/navbar/navbar.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { ProduitsComponent } from './frontoffice/produits/produits.component';
import { IndustriesComponent } from './frontoffice/industries/industries.component';
import { AboutComponent } from './frontoffice/about/about.component';
import { ContactComponent } from './frontoffice/contact/contact.component';
import { RouterModule } from '@angular/router';
import { IndustrieproduitComponent } from './frontoffice/industrieproduit/industrieproduit.component';
import { SousindustrieComponent } from './frontoffice/sousindustrie/sousindustrie.component';
import { ListeproduitsComponent } from './frontoffice/listeproduits/listeproduits.component';
import { DetailproduitComponent } from './frontoffice/detailproduit/detailproduit.component';
import { ProduitMoteursComponent } from './frontoffice/produit/produit-moteurs/produit-moteurs.component';
import { ProduitTransmissionComponent } from './frontoffice/produit/produit-transmission/produit-transmission.component';
import { ProduitGraissesComponent } from './frontoffice/produit/produit-graisses/produit-graisses.component';
import { MoteursEssenceComponent } from './frontoffice/produit/moteurs-essence/moteurs-essence.component';
import { MoteursEssenceDieselComponent } from './frontoffice/produit/moteurs-essence-diesel/moteurs-essence-diesel.component';
import { MoteursDieselComponent } from './frontoffice/produit/moteurs-diesel/moteurs-diesel.component';
import { Moteurs2t4tComponent } from './frontoffice/produit/moteurs2t4t/moteurs2t4t.component';
import { TransmissionAutomatiqueComponent } from './frontoffice/produit/transmission-automatique/transmission-automatique.component';
import { TransmissionManuelComponent } from './frontoffice/produit/transmission-manuel/transmission-manuel.component';
import { TransmissionCaterpilarComponent } from './frontoffice/produit/transmission-caterpilar/transmission-caterpilar.component';
import { GraissesproductslistComponent } from './frontoffice/produit/graissesproductslist/graissesproductslist.component';
import { CookiesComponent } from './frontoffice/cookies/cookies.component';
import { RessourcevideoComponent } from './frontoffice/ressourcevideo/ressourcevideo.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { SafePipe } from './frontoffice/contact/saf.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProduitsComponent,
    IndustriesComponent,
    AboutComponent,
    ContactComponent,
    IndustrieproduitComponent,
    SousindustrieComponent,
    ListeproduitsComponent,
    ProduitMoteursComponent,
    ProduitTransmissionComponent,
    ProduitGraissesComponent,
    MoteursEssenceComponent,
    MoteursEssenceDieselComponent,
    MoteursDieselComponent,
    Moteurs2t4tComponent,
    TransmissionAutomatiqueComponent,
    TransmissionManuelComponent,
    TransmissionCaterpilarComponent,
    GraissesproductslistComponent,
    CookiesComponent,
    RessourcevideoComponent,
    SafePipe,
    DetailproduitComponent







   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


