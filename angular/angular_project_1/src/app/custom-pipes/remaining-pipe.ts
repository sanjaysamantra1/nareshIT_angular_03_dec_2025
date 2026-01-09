import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string, maxLength: number = 100) {
    return maxLength - msg.length;
  }
}
