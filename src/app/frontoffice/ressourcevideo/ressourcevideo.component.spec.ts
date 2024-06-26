import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcevideoComponent } from './ressourcevideo.component';

describe('RessourcevideoComponent', () => {
  let component: RessourcevideoComponent;
  let fixture: ComponentFixture<RessourcevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RessourcevideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RessourcevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
