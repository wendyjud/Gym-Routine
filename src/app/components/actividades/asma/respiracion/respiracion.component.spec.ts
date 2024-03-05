import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiracionComponent } from './respiracion.component';

describe('RespiracionComponent', () => {
  let component: RespiracionComponent;
  let fixture: ComponentFixture<RespiracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespiracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespiracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
