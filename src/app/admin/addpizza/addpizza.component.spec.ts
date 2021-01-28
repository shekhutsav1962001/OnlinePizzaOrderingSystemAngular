import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpizzaComponent } from './addpizza.component';

describe('AddpizzaComponent', () => {
  let component: AddpizzaComponent;
  let fixture: ComponentFixture<AddpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
