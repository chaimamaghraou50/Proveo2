import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteursEssenceComponent } from './moteurs-essence.component';

describe('MoteursEssenceComponent', () => {
  let component: MoteursEssenceComponent;
  let fixture: ComponentFixture<MoteursEssenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoteursEssenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoteursEssenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
