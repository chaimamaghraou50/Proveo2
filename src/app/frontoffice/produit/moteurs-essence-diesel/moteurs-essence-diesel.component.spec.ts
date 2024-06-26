import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteursEssenceDieselComponent } from './moteurs-essence-diesel.component';

describe('MoteursEssenceDieselComponent', () => {
  let component: MoteursEssenceDieselComponent;
  let fixture: ComponentFixture<MoteursEssenceDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoteursEssenceDieselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoteursEssenceDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
