import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioCalComponent } from './cardio-cal.component';

describe('CardioCalComponent', () => {
  let component: CardioCalComponent;
  let fixture: ComponentFixture<CardioCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
