import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  // pure: false // impure
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number) {
    console.log('ordinal pipe called...')
    let rem = value % 10;

    if (rem == 1) {
      return value + 'st';
    } else if (rem == 2) {
      return value + 'nd';
    } else if (rem == 3) {
      return value + 'rd';
    } else {
      return value + 'th';
    }
  }

}
