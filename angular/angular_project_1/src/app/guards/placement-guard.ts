import { CanActivateChildFn } from '@angular/router';

export const placementGuard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
