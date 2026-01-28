import { HttpClient } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  userId = signal(1);
  userData:any = signal({});
  constructor(private httpClient: HttpClient) {
  }
  userDetailsEffect = effect(() => {
    // const id = this.userId();
    this.fetchUserDetails(1);
  });
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData.set(response);
    })
  }
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }
}
