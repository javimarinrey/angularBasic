import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngckeditor',
  templateUrl: './ngckeditor.component.html',
  styleUrls: ['./ngckeditor.component.css']
})
export class NgckeditorComponent implements OnInit {

  content: string;

  constructor() {
    this.content = `<p>My HTML</p>`;
  }

  ngOnInit() {
  }

}
