import { TestBed } from '@angular/core/testing';

import { AuthOrgService } from './auth-org.service';

describe('AuthOrgService', () => {
  let service: AuthOrgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthOrgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
