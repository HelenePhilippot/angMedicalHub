import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeleneComponent } from './helene.component';

describe('HeleneComponent', () => {
  let component: HeleneComponent;
  let fixture: ComponentFixture<HeleneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeleneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeleneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
