import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent implements OnInit {

  time = {hour: 13, minute: 30};
  code = `
<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
<hr>
<pre>Selected time: {{time | json}}</pre>`;

  code1 = `
import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-basic',
  templateUrl: './timepicker-basic.html'
})
export class NgbdTimepickerBasic {
  time = {hour: 13, minute: 30};
}`;

  constructor() { }

  ngOnInit() {
  }

}
