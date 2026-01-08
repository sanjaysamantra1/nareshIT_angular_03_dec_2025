import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  // ele is an instance of ElementRef class
  // let ele = new ElementRef();
  constructor(private ele: ElementRef) { // Dependency Injection
    console.log(ele);
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow', 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('', '');
  }
  private highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }

}
