import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  user: any = signal({});
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit() {
    this.activatedRoute.params.pipe(switchMap((params: any) =>
      this.http.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    )).subscribe((userResponse: any) => {
      this.user.set(userResponse);
    });
  }
}
