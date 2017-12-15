import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {

  public isCollapsed: boolean = false;

  code: string = `
<p>
  <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed"
          [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
    Toggle
  </button>
</p>
<div id="collapseExample" [ngbCollapse]="isCollapsed">
  <div class="card">
    <div class="card-body">
      You can collapse this card by clicking Toggle
    </div>
  </div>
</div>`;

  code1: string = `
import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-collapse-basic',
  templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
  public isCollapsed = false;
}`;

  constructor() { }

  ngOnInit() {
  }

}
