import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSimpleSearchComponent } from './p-simple-search.component';

describe('PSimpleSearchComponent', () => {
  let component: PSimpleSearchComponent;
  let fixture: ComponentFixture<PSimpleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PSimpleSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PSimpleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
