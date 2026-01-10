import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  inputs: ['achild2'],
  outputs: ['addressEvent']
})
export class Child2 {
  achild2: any;
  courseName = 'Angular From NareshIT';
  address = 'Ameerpet, Hyderabad';

  addressEvent = new EventEmitter();
  sendDataToParent() {
    this.addressEvent.emit(this.address)
  }
}
