import { ProductList } from './../product-list/product-list';
import { Component, ViewEncapsulation } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Parent } from '../parent/parent';
import { TrafficLight } from '../traffic-light/traffic-light';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // Directives,
    // MyModal
    // ProductList
    // UserList
    // PipesDemo
    Parent,
    // TrafficLight
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
