import { TestBed } from '@angular/core/testing';

import { LivematchesService } from './livematches.service';

describe('LivematchesService', () => {
  let service: LivematchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivematchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
