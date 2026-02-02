import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {
  loggedInUser = 'Sanjay';
  // userRole = 'Trainer';
  userRole = 'Student';
}
