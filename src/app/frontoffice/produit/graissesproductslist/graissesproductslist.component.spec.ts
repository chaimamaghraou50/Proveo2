import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraissesproductslistComponent } from './graissesproductslist.component';

describe('GraissesproductslistComponent', () => {
  let component: GraissesproductslistComponent;
  let fixture: ComponentFixture<GraissesproductslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraissesproductslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraissesproductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
