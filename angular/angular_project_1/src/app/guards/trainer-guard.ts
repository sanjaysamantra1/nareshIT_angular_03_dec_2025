import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInformationService = inject(UserInformationService)
  if (userInformationService.userRole === 'Trainer') {
    return true;
  } else {
    alert('Sorry, You dont have access to this page.')
    return false;
  }
};
