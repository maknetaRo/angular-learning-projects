import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPassMessageComponent } from './p-pass-message.component';

describe('PPassMessageComponent', () => {
  let component: PPassMessageComponent;
  let fixture: ComponentFixture<PPassMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PPassMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PPassMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
