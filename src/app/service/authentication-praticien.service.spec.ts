import { TestBed } from '@angular/core/testing';

import { AuthenticationPraticienService } from './authentication-praticien.service';

describe('AuthenticationPraticienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationPraticienService = TestBed.get(AuthenticationPraticienService);
    expect(service).toBeTruthy();
  });
});
