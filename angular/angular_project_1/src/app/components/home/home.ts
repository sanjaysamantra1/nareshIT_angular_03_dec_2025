import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  timer: number | undefined;

  ngOnInit() {
    console.log('Home Initialized')
    this.timer = setInterval(() => {
      console.log('I am Home Component')
    }, 1000);
  }

  ngOnDestroy() { // cleanup
    console.log('Home Destroyed')
    clearInterval(this.timer)
  }
}
