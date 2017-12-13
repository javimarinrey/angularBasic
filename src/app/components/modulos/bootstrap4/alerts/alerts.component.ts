import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  code: string = `
<ngb-alert [dismissible]="false">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</ngb-alert>
  `;

  constructor() { }

  ngOnInit() {
  }
}
