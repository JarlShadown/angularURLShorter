import { TestBed } from '@angular/core/testing';

import { ConsultAPIService } from './consult-api.service';

describe('ConsultAPIService', () => {
  let service: ConsultAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
