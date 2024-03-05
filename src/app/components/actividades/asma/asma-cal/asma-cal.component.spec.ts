import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmaCalComponent } from './asma-cal.component';

describe('AsmaCalComponent', () => {
  let component: AsmaCalComponent;
  let fixture: ComponentFixture<AsmaCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmaCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
