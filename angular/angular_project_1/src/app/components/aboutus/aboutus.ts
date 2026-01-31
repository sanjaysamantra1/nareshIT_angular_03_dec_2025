import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink
  ],
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
  constructor(private routerObj: Router, private location: Location) {
  }
  doSomethingAndGoToHome() {
    console.log('Do Something....');
    this.routerObj.navigate(['/home'])
  }

  previous() {
    this.location.back()
  }
  next() {
    this.location.forward()
  }
}
