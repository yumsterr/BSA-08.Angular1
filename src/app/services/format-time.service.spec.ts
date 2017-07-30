import { TestBed, inject } from '@angular/core/testing';

import { FormatTimeService } from './format-time.service';

describe('FormatTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatTimeService]
    });
  });

  it('should be created', inject([FormatTimeService], (service: FormatTimeService) => {
    expect(service).toBeTruthy();
  }));
});
