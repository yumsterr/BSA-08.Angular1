import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number, args?: any): any {

    const now = new Date(Math.abs(value));
    const min = this.addZero(now.getMinutes(), 2);
    const sec = this.addZero(now.getSeconds(), 2);
    const mlsec = this.addZero(now.getMilliseconds(), 3);
    return min + ':' + sec + ':' + mlsec;
  }
   addZero(num, length) {
    num = num + '';
    while (num.length < length) {
      num = '0' + num;
    }
    return num;
  }

}
