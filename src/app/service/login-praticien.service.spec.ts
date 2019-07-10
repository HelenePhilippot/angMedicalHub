import { TestBed } from '@angular/core/testing';

import { LoginPraticienService } from './login-praticien.service';

describe('LoginPraticienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginPraticienService = TestBed.get(LoginPraticienService);
    expect(service).toBeTruthy();
  });
});
