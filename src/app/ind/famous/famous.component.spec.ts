import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousComponent } from './famous.component';

describe('FamousComponent', () => {
  let component: FamousComponent;
  let fixture: ComponentFixture<FamousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
