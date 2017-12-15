import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  currentRate = 8;
  selected = 0;
  hovered = 0;
  readonly = false;
  code: string = `
<ngb-rating [(rate)]="currentRate"></ngb-rating>
<hr>
<pre>Rate: <b>{{currentRate}}</b></pre>
<ngb-rating [(rate)]="selected" (hover)="hovered=$event" (leave)="hovered=0" [readonly]="readonly"></ngb-rating>
<hr>
<pre>
Selected: <b>{{selected}}</b>
Hovered: <b>{{hovered}}</b>
</pre>
<button class="btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}" (click)="readonly = !readonly">
  {{ readonly ? "readonly" : "editable"}}
</button>`;

  constructor() { }

  ngOnInit() {
  }

}
