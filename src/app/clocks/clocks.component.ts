import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent implements OnInit {
  time: string = (new Date()).toLocaleString();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = (new Date()).toLocaleString();
    }, 1000);
  }

}
