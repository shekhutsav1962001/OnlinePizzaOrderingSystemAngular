import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndComponent } from './ind.component';

describe('IndComponent', () => {
  let component: IndComponent;
  let fixture: ComponentFixture<IndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
