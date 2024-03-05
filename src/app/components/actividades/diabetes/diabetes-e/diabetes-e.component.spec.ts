import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesEComponent } from './diabetes-e.component';

describe('DiabetesEComponent', () => {
  let component: DiabetesEComponent;
  let fixture: ComponentFixture<DiabetesEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
