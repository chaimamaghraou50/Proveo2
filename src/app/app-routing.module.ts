import { Moteurs2t4tComponent } from './frontoffice/produit/moteurs2t4t/moteurs2t4t.component';
import { IndustriesComponent } from './frontoffice/industries/industries.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontoffice/home/home.component';
import { ContactComponent } from './frontoffice/contact/contact.component';
import { AboutComponent } from './frontoffice/about/about.component';
import { ProduitsComponent } from './frontoffice/produits/produits.component';
import { IndustrieproduitComponent } from './frontoffice/industrieproduit/industrieproduit.component';
import { SousindustrieComponent } from './frontoffice/sousindustrie/sousindustrie.component';
import { ListeproduitsComponent } from './frontoffice/listeproduits/listeproduits.component';
import { DetailproduitComponent } from './frontoffice/detailproduit/detailproduit.component';
import { ProduitMoteursComponent } from './frontoffice/produit/produit-moteurs/produit-moteurs.component';
import { MoteursEssenceComponent } from './frontoffice/produit/moteurs-essence/moteurs-essence.component';
import { MoteursEssenceDieselComponent } from './frontoffice/produit/moteurs-essence-diesel/moteurs-essence-diesel.component';
import { MoteursDieselComponent } from './frontoffice/produit/moteurs-diesel/moteurs-diesel.component';
import { TransmissionAutomatiqueComponent } from './frontoffice/produit/transmission-automatique/transmission-automatique.component';
import { TransmissionManuelComponent } from './frontoffice/produit/transmission-manuel/transmission-manuel.component';
import { TransmissionCaterpilarComponent } from './frontoffice/produit/transmission-caterpilar/transmission-caterpilar.component';
import { ProduitTransmissionComponent } from './frontoffice/produit/produit-transmission/produit-transmission.component';
import { ProduitGraissesComponent } from './frontoffice/produit/produit-graisses/produit-graisses.component';
import { GraissesproductslistComponent } from './frontoffice/produit/graissesproductslist/graissesproductslist.component';
import { RessourcevideoComponent } from './frontoffice/ressourcevideo/ressourcevideo.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'produit', component: ProduitsComponent},
  {path:'produit/produitindustrie', component: ProduitMoteursComponent},
  {path:'industrie', component: IndustriesComponent},
  {path:'sousindustrie', component:SousindustrieComponent},
  {path:'productlist', component: ListeproduitsComponent},
  {path:'produitdetail', component: DetailproduitComponent},
  {path:'moteuressence', component:MoteursEssenceComponent},
  {path:'moteuressenceDiesel', component: MoteursEssenceDieselComponent},
  {path:'moteurDiesel', component:MoteursDieselComponent},
  {path:'moteur2T4T', component:Moteurs2t4tComponent},
  {path:'TransmissionAutomoatique', component: TransmissionAutomatiqueComponent},
  {path:'TransmissionManuel', component: TransmissionManuelComponent},
  {path:'TransmissionCaterpilar', component: TransmissionCaterpilarComponent},
  {path:'produit/huiletransmission', component: ProduitTransmissionComponent},
  {path:'industriel', component:IndustrieproduitComponent},
  {path:'produit/graisse', component: ProduitGraissesComponent},
  {path:'TransmissionAutomatique', component: TransmissionAutomatiqueComponent},
  {path:'TransmissionCaterpilar', component:TransmissionCaterpilarComponent},
  {path:'TransmissionManuel', component: TransmissionManuelComponent},
  {path:'graisseproducrlist', component: GraissesproductslistComponent},
  {path:'video', component:RessourcevideoComponent},
  {path:'detailprod/:id' ,component: DetailproduitComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { FrontOfficeComponent } from './front-office/front-office.component';
// import { BackOfficeComponent } from './back-office/back-office.component';
// import { AuthGuard } from './auth.guard';

// const routes: Routes = [
//   { path: '', redirectTo: '/front-office', pathMatch: 'full' },
//   {
//     path: 'front-office',
//     component: FrontOfficeComponent,
//     children: [
//       { path: 'products', loadChildren: () => import('./front-office/products/products.module').then(m => m.ProductsModule) },
//       { path: 'contact', loadChildren: () => import('./front-office/contact/contact.module').then(m => m.ContactModule) }
//     ]
//   },
//  t
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }