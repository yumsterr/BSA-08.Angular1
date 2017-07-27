import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

  startTimer() {
    console.log(this.currentWatchPos);
    this.watchInterval = setInterval(() => {
      this.currentWatchPos += 10;
      const {min, sec, mlsec} = this.getTime(this.currentWatchPos);
      this.minutes = min;
      this.seconds = sec;
      this.mlseconds = mlsec;
    }, 10);
  }
  pauseTimer() {
    clearInterval(this.watchInterval);
  }
  resertTimer() { }

  getTime(mlseconds) {
    const min = Math.trunc((mlseconds / 1000) / 60);
    const sec = Math.trunc((mlseconds / 1000) % 60);
    const mlsec = (mlseconds % 1000);
    return {min, sec, mlsec};
  }

}
