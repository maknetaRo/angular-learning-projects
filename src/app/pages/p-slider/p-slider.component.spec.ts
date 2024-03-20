import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSliderComponent } from './p-slider.component';

describe('PSliderComponent', () => {
  let component: PSliderComponent;
  let fixture: ComponentFixture<PSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
