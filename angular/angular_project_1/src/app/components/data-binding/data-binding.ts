import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  img_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9I9bONSq-ByXrB5OzXY9E-rdfdXIYzIGwA&s'
  userName: string = 'Virat Kohli';
  flag: boolean = false;
  count: number = 0;
  msg: string = '';
  selectedState: string = 'Karnataka';

  increment() {
    this.count = this.count + 1;
  }
  f1() {
    alert('f1...')
  }
}
