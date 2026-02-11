import { TestBed } from '@angular/core/testing';

import { AuthGoogleServiceTs } from './auth-google.service.ts';

describe('AuthGoogleServiceTs', () => {
  let service: AuthGoogleServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGoogleServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
