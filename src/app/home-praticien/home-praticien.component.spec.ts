import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePraticienComponent } from './home-praticien.component';

describe('HomePraticienComponent', () => {
  let component: HomePraticienComponent;
  let fixture: ComponentFixture<HomePraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
