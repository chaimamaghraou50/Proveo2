import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrieproduitComponent } from './industrieproduit.component';

describe('IndustrieproduitComponent', () => {
  let component: IndustrieproduitComponent;
  let fixture: ComponentFixture<IndustrieproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustrieproduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustrieproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
