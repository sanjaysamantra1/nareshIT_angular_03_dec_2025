import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { MysortPipe } from '../../custom-pipes/mysort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe,
    MysortPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName: string = 'saCHiN teNDulKAr';
  mySal: number = 5000;
  dateObj = new Date();
  user = { name: 'Virat Kohli', age: 38, address: 'Bangalore' };
  arr = [10, 20, 30, 40, 50, 60, 70];
  msg: string = '';
  msg2: string = '';
  num: number = 21;
  numArr = [20, 50, 10, 40, 30]

  keepOriginalOrder = function () {
    console.log('keepOriginalOrder')
    return 0;
  }
}
