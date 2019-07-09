import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningConsultComponent } from './planning-consult.component';

describe('PlanningConsultComponent', () => {
  let component: PlanningConsultComponent;
  let fixture: ComponentFixture<PlanningConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
