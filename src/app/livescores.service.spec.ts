import { TestBed } from '@angular/core/testing';

import { LivescoresService } from './livescores.service';

describe('LivescoresService', () => {
  let service: LivescoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivescoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
