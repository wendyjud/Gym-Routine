import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesCalComponent } from './diabetes-cal.component';

describe('DiabetesCalComponent', () => {
  let component: DiabetesCalComponent;
  let fixture: ComponentFixture<DiabetesCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
