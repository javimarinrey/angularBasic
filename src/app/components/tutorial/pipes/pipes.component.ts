import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  texto: string = 'Texto de prueba';
  importe: number = 1.5;

  constructor() { }

  ngOnInit() {
  }

}
