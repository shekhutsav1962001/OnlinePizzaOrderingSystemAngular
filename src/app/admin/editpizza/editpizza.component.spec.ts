import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpizzaComponent } from './editpizza.component';

describe('EditpizzaComponent', () => {
  let component: EditpizzaComponent;
  let fixture: ComponentFixture<EditpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
