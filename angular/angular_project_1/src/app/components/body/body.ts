import { Component, ViewEncapsulation } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Directives } from '../directives/directives';

@Component({
  selector: 'app-body',
  imports: [
    DataBinding,
    Directives
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
