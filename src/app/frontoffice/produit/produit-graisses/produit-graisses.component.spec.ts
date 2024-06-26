import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitGraissesComponent } from './produit-graisses.component';

describe('ProduitGraissesComponent', () => {
  let component: ProduitGraissesComponent;
  let fixture: ComponentFixture<ProduitGraissesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitGraissesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitGraissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
