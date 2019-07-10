import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPraticienComponent } from './login-praticien.component';

describe('LoginPraticienComponent', () => {
  let component: LoginPraticienComponent;
  let fixture: ComponentFixture<LoginPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
