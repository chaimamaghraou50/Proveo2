import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionAutomatiqueComponent } from './transmission-automatique.component';

describe('TransmissionAutomatiqueComponent', () => {
  let component: TransmissionAutomatiqueComponent;
  let fixture: ComponentFixture<TransmissionAutomatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransmissionAutomatiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransmissionAutomatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
