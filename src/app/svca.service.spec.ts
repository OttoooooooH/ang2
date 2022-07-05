import { TestBed } from '@angular/core/testing';

import { SvcaService } from './svca.service';

describe('SvcaService', () => {
  let service: SvcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
