import { TestBed } from '@angular/core/testing';

import { ViewtransitionService } from './viewtransition.service';

describe('ViewtransitionService', () => {
  let service: ViewtransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
