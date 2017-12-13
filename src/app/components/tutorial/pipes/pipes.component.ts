import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  texto: string = 'Texto de prueba';
  importe: number = 1.5;
  fecha: number = new Date().getTime();
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  collection: string[] = ['a', 'b', 'c', 'd'];

  code = `{{texto | <pipe>}}`;
  pipe_capitalizado = `
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');
    for (let i in nombres) {
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
    }
    return nombres.join(' ');
  }

}`;


  app_module = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
...

// Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [  
    ...
    CapitalizadoPipe
  ],
  imports: [
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  constructor() { }

  ngOnInit() {
  }
}
