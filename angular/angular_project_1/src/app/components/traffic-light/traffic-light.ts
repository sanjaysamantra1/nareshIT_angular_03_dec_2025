import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  imports: [],
  templateUrl: './traffic-light.html',
  styleUrl: './traffic-light.css',
})
export class TrafficLight {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor(private cdr:ChangeDetectorRef) {
    this.config = {
      "red": { nextColor: 'green', duration: 3000 },
      "green": { nextColor: 'yellow', duration: 5000 },
      "yellow": { nextColor: 'red', duration: 2000 }
    };
    this.colorsArr = Object.keys(this.config);
  }
  ngDoCheck() {
    const { duration, nextColor } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
      this.cdr.markForCheck();
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
