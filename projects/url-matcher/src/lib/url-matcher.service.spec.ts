import { TestBed } from '@angular/core/testing';

import { UrlMatcherService } from './url-matcher.service';

describe('UrlMatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlMatcherService = TestBed.get(UrlMatcherService);
    expect(service).toBeTruthy();
  });
});
