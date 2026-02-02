import { CanDeactivateFn } from '@angular/router';

export const hasChangesGuard: CanDeactivateFn<any> = (component: any, currentRoute, currentState, nextState) => {
  if (component.isFormSubmitted) {
    return true;
  } else {
    alert('plz save the changes')
    return false;
  }
};
