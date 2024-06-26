import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionCaterpilarComponent } from './transmission-caterpilar.component';

describe('TransmissionCaterpilarComponent', () => {
  let component: TransmissionCaterpilarComponent;
  let fixture: ComponentFixture<TransmissionCaterpilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransmissionCaterpilarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransmissionCaterpilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
