import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  time$ = interval(1000).pipe(map(value => new Date().toLocaleTimeString()))

  constructor() {
  }
  ngOnInit() {
    this.from_demo();
    this.interval_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let cars_obs = from(cars);
    cars_obs.subscribe({
      next: (value) => { console.log('next response received: ', value) }, // 3 times
      error: (err) => { console.log(err) },
      complete: () => { console.log('All Values Received') }, // 1 time
    });
  }

  num_publisher: Observable<number> | undefined;
  interval_demo() {
    this.num_publisher = interval(1000); // publishes a new value after every 1 sec
    this.num_publisher.subscribe((val) => console.log('num_publisher , Next Method: ', val))
  }
}
