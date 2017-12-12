import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from 'ng2-translate';


// Rutas
import { APP_ROUTING } from './app.routes';

// Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PipesComponent } from './components/tutorial/pipes/pipes.component';
import { Ng2chartsComponent } from './components/modulos/ng2charts/ng2charts.component';
import { EmpezandoComponent } from './components/empezando/empezando.component';
import { Ng2translateComponent } from './components/modulos/ng2translate/ng2translate.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PipesComponent,
    CapitalizadoPipe,
    Ng2chartsComponent,
    EmpezandoComponent,
    Ng2translateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    ChartsModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
