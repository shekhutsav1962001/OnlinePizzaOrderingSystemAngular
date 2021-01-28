import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserofferComponent } from './useroffer.component';

describe('UserofferComponent', () => {
  let component: UserofferComponent;
  let fixture: ComponentFixture<UserofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
