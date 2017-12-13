import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from 'ng2-translate';
import { CKEditorModule } from 'ng2-ckeditor';


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
import { NgckeditorComponent } from './components/modulos/ngckeditor/ngckeditor.component';
import { AngularfireComponent } from './components/modulos/angularfire/angularfire.component';
import { IntroducionComponent } from './components/tutorial/introducion/introducion.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PipesComponent,
    CapitalizadoPipe,
    Ng2chartsComponent,
    EmpezandoComponent,
    Ng2translateComponent,
    NgckeditorComponent,
    AngularfireComponent,
    IntroducionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    ChartsModule,
    CKEditorModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
