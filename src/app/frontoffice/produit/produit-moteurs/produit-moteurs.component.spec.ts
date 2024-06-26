import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitMoteursComponent } from './produit-moteurs.component';

describe('ProduitMoteursComponent', () => {
  let component: ProduitMoteursComponent;
  let fixture: ComponentFixture<ProduitMoteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitMoteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitMoteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
