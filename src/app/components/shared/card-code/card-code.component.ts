import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-code',
  templateUrl: './card-code.component.html',
  styleUrls: ['./card-code.component.css']
})
export class CardCodeComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit() {
  }

}
