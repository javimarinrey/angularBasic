import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnInit {

  code: string = `
<h1>Example heading <span class="badge badge-secondary">New</span></h1>`;

  constructor() { }

  ngOnInit() {
  }

}
