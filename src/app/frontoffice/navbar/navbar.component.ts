import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  lang:string ='';

  constructor(){

  }

  // ngOnInit(): void {
  //   this.lang = localStorage.getItem('lang') || 'en';

  // }

  // ChangeLang(lang:any){
  //   const selectedLanguage = lang.target.value;

  //   localStorage.setItem('lang',selectedLanguage);

  //   this.translateService.use(selectedLanguage);

  // }

}
