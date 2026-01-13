import { FormsModule } from '@angular/forms';
import { Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild, viewChild } from '@angular/core';
import { Child2 } from '../child2/child2';
import { Child1 } from '../child1/child1';
import { Home } from '../home/home';
import { Aboutus } from '../aboutus/aboutus';

@Component({
  selector: 'app-parent',
  imports: [FormsModule, Child1, Child2, Home, Aboutus],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  flag:boolean = true;
  a: number;
  addressParent: string = '';
  @ViewChild('myBox1') myInputBox1: ElementRef | undefined;

  receiveAddressEvent(address: string) {
    this.addressParent = address;
  }
  calculate() {
    console.log('I am calculate')
  }

  constructor() {
    this.a = 10;
    console.log("Parent constructor")
    console.log(this.myInputBox1);
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBox1);
    this.myInputBox1?.nativeElement.focus();

  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

}
