import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaComponent } from './aa.component';

describe('AaComponent', () => {
  let component: AaComponent;
  let fixture: ComponentFixture<AaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
