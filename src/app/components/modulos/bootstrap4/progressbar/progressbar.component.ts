import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html'
})
export class ProgressbarComponent implements OnInit {

  height = '20px';
  code: string = `
<p><ngb-progressbar type="success" [value]="25"></ngb-progressbar></p>
<p><ngb-progressbar showValue="true" type="success" [value]="25"></ngb-progressbar></p>
<p><ngb-progressbar type="info" [value]="50">Copying file <b>2 of 4</b>...</ngb-progressbar></p>
<p><ngb-progressbar type="danger" [value]="100" [height]="height">{{height}}</ngb-progressbar></p>`;

  constructor() { }

  ngOnInit() {
  }

}
