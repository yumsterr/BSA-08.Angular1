import { Component, OnInit } from '@angular/core';

interface ILapInfo {
  total: number;
  lap: number;
  avg: number;
  diff: number;
  start: number;
}

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})

export class StopwatchComponent implements OnInit {
  currentWatchPos = 0;
  minutes = 0;
  seconds = 0;
  mlseconds = 0;
  watchInterval: any;
  showStart = true;
  stopwatchHistory = [];
  currentResRow = {} as ILapInfo;
  avgLap = [];

  constructor() { }

  ngOnInit() {
    console.log(this.stopwatchHistory);
  }

  startTimer() {
    this.currentResRow.start = this.currentWatchPos;
    this.showStart = false;
    this.watchInterval = setInterval(() => {
      this.currentWatchPos += 10;
      this.showTime(this.currentWatchPos);
    }, 10);
  }
  pauseTimer() {
    clearInterval(this.watchInterval);
    this.stopwatchHistory.push(this.currentResRow);
    this.currentResRow = {} as ILapInfo;
    this.showStart = true;
  }
  resertTimer() {
    clearInterval(this.watchInterval);
    this.currentWatchPos = 0;
    this.showStart = true;
    this.showTime(this.currentWatchPos);
  }

  lapTimer() {
    // console.log(this.currentResRow.total);
    const lapTime = this.currentWatchPos - this.currentResRow.start; // prev value
    this.currentResRow.total = this.currentWatchPos;
    this.currentResRow.lap = lapTime;
    this.currentResRow.avg = this.average();
    this.stopwatchHistory.push(this.currentResRow);
    this.currentResRow = {} as ILapInfo;
    this.currentResRow.start = this.currentWatchPos;
  }

  showTime(mlseconds) {
    this.minutes = Math.trunc((mlseconds / 1000) / 60);
    this.seconds = Math.trunc((mlseconds / 1000) % 60);
    this.mlseconds = (mlseconds % 1000);
  }

  average() {
    let sum = this.currentResRow.lap;

    for (let i = 0; i < this.stopwatchHistory.length; i++) {
      const lapTime = this.stopwatchHistory[i].lap || 0;
      sum += parseInt(lapTime, 10);
    }
    const avg = Math.round(sum / (this.stopwatchHistory.length + 1));
    return avg;
  }


}
