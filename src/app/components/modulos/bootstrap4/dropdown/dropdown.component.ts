import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  code: string = `
<div ngbDropdown class="d-inline-block">
  <button class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>Toggle dropdown</button>
  <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
    <button class="dropdown-item">Action - 1</button>
    <button class="dropdown-item">Another Action</button>
    <button class="dropdown-item">Something else is here</button>
  </div>
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
