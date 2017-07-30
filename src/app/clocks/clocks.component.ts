import { Component, OnInit } from '@angular/core';
import { FormatTime } from '../services/format-time.service';


@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css'],
  providers: [FormatTime]
})
export class ClocksComponent implements OnInit {
  time: number = Date.now();

  constructor(private formatTime: FormatTime) { }

  ngOnInit() {
    setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

}
