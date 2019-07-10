import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccPatientComponent } from './acc-patient.component';

describe('AccPatientComponent', () => {
  let component: AccPatientComponent;
  let fixture: ComponentFixture<AccPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
