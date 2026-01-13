import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
  ngOnInit() {
    console.log('Aboutus Initialized')
  }
  ngOnDestroy() {
    console.log('aboutus Destroyed')
  }
}
