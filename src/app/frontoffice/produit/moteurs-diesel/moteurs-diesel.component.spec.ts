import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteursDieselComponent } from './moteurs-diesel.component';

describe('MoteursDieselComponent', () => {
  let component: MoteursDieselComponent;
  let fixture: ComponentFixture<MoteursDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoteursDieselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoteursDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
