import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MdButtonModule } from '@angular/material';

// import { MdSliderModule } from '@angular/material';
// import { MaterialModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  sliderSecVal = '0';
  sliderMinVal = '0';
  currentTImer: any;
  timerOn = false;
  constructor() { }

  startTimer() {
    const seconds = (parseInt(this.sliderSecVal, 10) + parseInt(this.sliderMinVal, 10) * 60) * 1000;
    let timeLeft = seconds;
    if (!this.timerOn && seconds > 0) {
      this.timerOn = true;
      this.currentTImer = setInterval(() => {
        timeLeft -= 1000;
        if (timeLeft < 0) {
          alert('Your time is out');
          this.timerOn = false;
          clearInterval(this.currentTImer);
          return true;
        }
        this.sliderSecVal = String((timeLeft / 1000) % 60);
        this.sliderMinVal = String(Math.trunc((timeLeft / 1000) / 60));
      }, 1000);
    }
  }

  pauseTimer() {
    this.timerOn = false;
    clearInterval(this.currentTImer);
  }

  resertTimer() {
    this.sliderSecVal = '0';
    this.sliderMinVal = '0';
    this.timerOn = false;
    clearInterval(this.currentTImer);
  }
}
