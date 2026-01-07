import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNospecialchar]',
})
export class Nospecialchar {

  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    let value = event?.target?.value;
    let regex = new RegExp(/[a-zA-Z0-9]+$/);
    // let regex = new RegExp(/^[a-z]+$/);   // Text Only
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }

}
