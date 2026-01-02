import { Component, ViewEncapsulation } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';

@Component({
  selector: 'app-body',
  imports: [
    DataBinding
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
