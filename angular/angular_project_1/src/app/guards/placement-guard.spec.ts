import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { placementGuard } from './placement-guard';

describe('placementGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => placementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
