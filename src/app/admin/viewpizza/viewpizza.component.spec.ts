import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpizzaComponent } from './viewpizza.component';

describe('ViewpizzaComponent', () => {
  let component: ViewpizzaComponent;
  let fixture: ComponentFixture<ViewpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
