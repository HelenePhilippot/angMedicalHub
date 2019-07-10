import { TestBed } from '@angular/core/testing';

import { AuthenticationPatientService } from './authentication-patient.service';

describe('AuthenticationPatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationPatientService = TestBed.get(AuthenticationPatientService);
    expect(service).toBeTruthy();
  });
});
