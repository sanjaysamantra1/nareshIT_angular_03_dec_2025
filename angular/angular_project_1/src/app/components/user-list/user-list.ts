import { Component } from '@angular/core';
import user_data from './user_data';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = user_data;
}
