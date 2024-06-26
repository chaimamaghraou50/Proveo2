import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousindustrieComponent } from './sousindustrie.component';

describe('SousindustrieComponent', () => {
  let component: SousindustrieComponent;
  let fixture: ComponentFixture<SousindustrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SousindustrieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SousindustrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
