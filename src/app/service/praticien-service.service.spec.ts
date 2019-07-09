import { TestBed } from '@angular/core/testing';

import { PraticienServiceService } from './praticien-service.service';

describe('PraticienServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PraticienServiceService = TestBed.get(PraticienServiceService);
    expect(service).toBeTruthy();
  });
});
