import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nareshITStudentGuard } from './naresh-itstudent-guard';

describe('nareshITStudentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nareshITStudentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
