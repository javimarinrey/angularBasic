import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent implements OnInit {

  code = `
<button type="button" class="btn btn-outline-secondary" placement="top" ngbTooltip="Tooltip on top">
  Tooltip on top
</button>`;

  constructor() { }

  ngOnInit() {
  }

}
