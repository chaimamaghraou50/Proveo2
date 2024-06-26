import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moteurs2t4tComponent } from './moteurs2t4t.component';

describe('Moteurs2t4tComponent', () => {
  let component: Moteurs2t4tComponent;
  let fixture: ComponentFixture<Moteurs2t4tComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Moteurs2t4tComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Moteurs2t4tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
