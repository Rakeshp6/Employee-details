import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsGuardService } from './employee-details-guard.service';

describe('EmployeeDetailsGuardService', () => {
  let service: EmployeeDetailsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDetailsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
