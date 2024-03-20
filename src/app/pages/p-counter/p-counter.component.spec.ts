import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCounterComponent } from './p-counter.component';

describe('PCounterComponent', () => {
  let component: PCounterComponent;
  let fixture: ComponentFixture<PCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
