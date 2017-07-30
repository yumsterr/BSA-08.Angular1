import { Component, OnInit } from '@angular/core';
import { Calculations } from '../services/calculations.service';
import { FormatTime } from '../services/format-time.service';

interface ILapInfo {
  total: number;
  lap: number;
  avg: number;
  diff: number;
  start: number;
  avgDiff: number;
  diffColor: string;
  avgDiffColor: string;
}

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  providers: [Calculations, FormatTime]
})

export class StopwatchComponent implements OnInit {
  currentWatchPos = 0;
  minutes = 0;
  seconds = 0;
  mlseconds = 0;
  watchInterval: any;
  showStart = true;
  stopwatchHistory = [];
  wasPause = false;
  currentResRow = {} as ILapInfo;
  avgLap = [];

  constructor(private calcServise: Calculations, private formatTime: FormatTime) {  }

  ngOnInit() {
    console.log(this.stopwatchHistory);
  }

  startTimer() {
    if (!this.wasPause) {
      this.currentResRow.start = this.currentWatchPos;
    }

    this.showStart = false;
    this.wasPause = false;

    this.watchInterval = setInterval(() => {
      this.currentWatchPos += 10;
      this.showTime(this.currentWatchPos);
    }, 10);
  }


  pauseTimer() {
    this.wasPause = true;
    clearInterval(this.watchInterval);
    this.showStart = true;
  }


  resertTimer() {
    clearInterval(this.watchInterval);
    this.currentWatchPos = 0;
    this.showStart = true;
    this.wasPause = false;
    this.stopwatchHistory = [];
    this.showTime(this.currentWatchPos);
  }


  lapTimer() {
    // console.log(this.currentResRow.total);
    let prevLapTime = 0;
    const lapTime = this.currentWatchPos - this.currentResRow.start; // prev value

    this.currentResRow.total = this.currentWatchPos;
    this.currentResRow.lap = lapTime;
    this.currentResRow.avg = this.calcServise.average(this.currentResRow, this.stopwatchHistory);

    if (this.stopwatchHistory.length > 0) {
      prevLapTime = this.stopwatchHistory[this.stopwatchHistory.length - 1].lap;
    }
    this.currentResRow.diff = lapTime - prevLapTime;
    if (this.currentResRow.diff > 0) {
      this.currentResRow.diffColor = 'red';
    } else {
      this.currentResRow.diffColor = 'green';
    }

    this.currentResRow.avgDiff = lapTime - this.currentResRow.avg;
    if (this.currentResRow.avgDiff > 0) {
      this.currentResRow.avgDiffColor = 'red';
    } else {
      this.currentResRow.avgDiffColor = 'green';
    }
    this.stopwatchHistory.push(this.currentResRow);
    this.currentResRow = {} as ILapInfo;
    this.currentResRow.start = this.currentWatchPos;
    this.wasPause = false;
  }

  showTime(mlseconds) {
    this.minutes = Math.trunc((mlseconds / 1000) / 60);
    this.seconds = Math.trunc((mlseconds / 1000) % 60);
    this.mlseconds = (mlseconds % 1000);
  }

}
