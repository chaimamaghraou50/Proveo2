import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionManuelComponent } from './transmission-manuel.component';

describe('TransmissionManuelComponent', () => {
  let component: TransmissionManuelComponent;
  let fixture: ComponentFixture<TransmissionManuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransmissionManuelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransmissionManuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
