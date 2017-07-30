import { Injectable } from '@angular/core';

@Injectable()
export class Calculations {
  constructor() { }

  average(currentResRow, stopwatchHistory) {
    let sum = currentResRow.lap;

    for (let i = 0; i < stopwatchHistory.length; i++) {
      const lapTime = stopwatchHistory[i].lap || 0;
      sum += parseInt(lapTime, 10);
    }
    const avg = Math.round(sum / (stopwatchHistory.length + 1));
    return avg;
  }
}
