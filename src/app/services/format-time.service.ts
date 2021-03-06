import { Injectable } from '@angular/core';

@Injectable()
export class FormatTime {

  constructor() { }

  getTime(time) {
    const now = new Date(time);
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
