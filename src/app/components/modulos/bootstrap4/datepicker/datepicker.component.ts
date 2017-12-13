import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  model: object;

  code: string = `
<form class="form-inline">
  <div class="form-group">
    <div class="input-group">
      <input class="form-control" placeholder="yyyy-mm-dd"
             name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
      <button class="input-group-addon" (click)="d.toggle()" type="button">
        <img src="img/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;"/>
      </button>
    </div>
  </div>
</form>

<hr/>
<pre>Model: {{ model | json }}</pre>`;

  constructor() { }

  ngOnInit() {
  }

}
