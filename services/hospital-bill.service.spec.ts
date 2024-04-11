import { TestBed } from '@angular/core/testing';

import { HospitalBillService } from './hospital-bill.service';

describe('HospitalBillService', () => {
  let service: HospitalBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
