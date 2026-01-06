import { ProductList } from './../product-list/product-list';
import { Component, ViewEncapsulation } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // Directives,
    // MyModal
    ProductList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {

}
