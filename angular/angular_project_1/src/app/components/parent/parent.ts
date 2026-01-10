import { Component } from '@angular/core';
import { Child2 } from '../child2/child2';
import { Child1 } from '../child1/child1';

@Component({
  selector: 'app-parent',
  imports: [Child1, Child2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  a: number = 10;
  addressParent: string = '';

  receiveAddressEvent(address: string) {
    this.addressParent = address;
  }
}
