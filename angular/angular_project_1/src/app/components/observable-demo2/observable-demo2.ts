import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // this.forkjoin_demo()
    // this.without_mergemap();
    this.mergeMap_demo();
    // this.concatMap_demo();
  }
  forkjoin_demo() {
    let user_obs = this.httpClient.get('https://jsonplaceholder.typicode.com/users'); // 2s
    let comments_obs = this.httpClient.get('https://jsonplaceholder.typicode.com/comments'); // 3s
    let todos_obs = this.httpClient.get('https://jsonplaceholder.typicode.com/todos'); // 1s
    // old syntax
    /* forkJoin([user_obs, comments_obs, todos_obs]).subscribe(
      responseArr => {
        console.log('called only when all apis are successful')
        console.log(responseArr)
      },
      err => console.log(err)
    ); */

    // new syntax
    forkJoin([user_obs, comments_obs, todos_obs]).subscribe({
      next: (responseArr) => console.log(responseArr),
      error: (err) => console.log(err),
      complete: () => console.log('all data received'),
    });
  }

  without_mergemap() {
    let userids = of(1, 2, 3, 4, 5);
    userids.subscribe(userid => {
      console.log('user id ', userid);
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userid}`).subscribe(userDetails => {
        console.log(userDetails)
      })
    });
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}
