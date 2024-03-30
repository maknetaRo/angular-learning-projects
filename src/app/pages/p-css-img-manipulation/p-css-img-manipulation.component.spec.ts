import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCssImgManipulationComponent } from './p-css-img-manipulation.component';

describe('PCssImgManipulationComponent', () => {
  let component: PCssImgManipulationComponent;
  let fixture: ComponentFixture<PCssImgManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PCssImgManipulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PCssImgManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
