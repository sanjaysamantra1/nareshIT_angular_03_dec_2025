import { HttpDemo1 } from './../http-demo1/http-demo1';
import { ThemeService } from './../../services/theme-service';
import { ProductList } from './../product-list/product-list';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Parent } from '../parent/parent';
import { TrafficLight } from '../traffic-light/traffic-light';
import { ClockService } from '../../services/clock-service';
import { Products } from '../products/products';
import { HttpDemo2 } from '../http-demo2/http-demo2';
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  selector: 'app-body',
  imports: [
    // DataBinding,
    // Directives,
    // MyModal
    // ProductList
    // UserList
    // PipesDemo
    // Parent,
    // TrafficLight
    // Products
    // HttpDemo1
    // HttpDemo2
    EmployeeList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.None
})
export class Body {
  clockService: ClockService;
  constructor(public themeService: ThemeService) {
    this.clockService = inject(ClockService); // Dependency Injection
  }
  ngOnInit() {
    // console.log('Is dark Theme: ', this.themeService.getTheme());
    // console.log('Date:: ', this.clockService.getTodayDate())
    // this.clockService.onTick(console.log);
  }
}
