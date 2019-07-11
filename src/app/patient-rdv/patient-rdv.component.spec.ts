import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRdvComponent } from './patient-rdv.component';

describe('PatientRdvComponent', () => {
  let component: PatientRdvComponent;
  let fixture: ComponentFixture<PatientRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
