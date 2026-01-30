import { SignalDemo1 } from './../signal-demo1/signal-demo1';
import { SubjectDemo1 } from './../subject-demo1/subject-demo1';
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
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { TodoList } from '../todo-list/todo-list';
import { TodoAdd } from '../todo-add/todo-add';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm } from '../template-form/template-form';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';

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
    // EmployeeList
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    // SubjectDemo1
    // TodoList,
    // TodoAdd
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateForm
    // ModelDrivenForm
    DynamicForm
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
