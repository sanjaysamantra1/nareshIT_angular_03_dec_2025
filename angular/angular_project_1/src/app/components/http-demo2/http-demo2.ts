import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-demo2',
  imports: [
    CommonModule
  ],
  templateUrl: './http-demo2.html',
  styleUrl: './http-demo2.css',
})
export class HttpDemo2 {
  user_api = 'https://jsonplaceholder.typicode.com/users';
  userResponse$!: Observable<any>;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userResponse$ = this.http.get(this.user_api);
  }
}

/*
  1. input changes
  2. Signal value changes
  3. observable value changes
  4. manually trigger Change Detaction
*/
