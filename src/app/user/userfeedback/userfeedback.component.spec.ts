import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedbackComponent } from './userfeedback.component';

describe('UserfeedbackComponent', () => {
  let component: UserfeedbackComponent;
  let fixture: ComponentFixture<UserfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
