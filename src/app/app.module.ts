import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts';

// Rutas
import { APP_ROUTING } from './app.routes';

// Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

// Directives
import { ResaltadoDirective } from './directives/resaltado.directive';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PipesComponent } from './components/tutorial/pipes/pipes.component';
import { Ng2chartsComponent } from './components/modulos/ng2charts/ng2charts.component';
import { CardCodeComponent } from './components/shared/card-code/card-code.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PipesComponent,
    CapitalizadoPipe,
    Ng2chartsComponent,
    CardCodeComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
