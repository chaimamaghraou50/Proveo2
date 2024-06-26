import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitTransmissionComponent } from './produit-transmission.component';

describe('ProduitTransmissionComponent', () => {
  let component: ProduitTransmissionComponent;
  let fixture: ComponentFixture<ProduitTransmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitTransmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
