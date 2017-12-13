import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from 'ng2-translate';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { EmpezandoComponent } from './components/empezando/empezando.component';
import { Ng2translateComponent } from './components/modulos/ng2translate/ng2translate.component';
import { NgckeditorComponent } from './components/modulos/ngckeditor/ngckeditor.component';
import { AngularfireComponent } from './components/modulos/angularfire/angularfire.component';
import { IntroducionComponent } from './components/tutorial/introducion/introducion.component';
import { Bootstrap4Component } from './components/modulos/bootstrap4/bootstrap4.component';
import { AlertsComponent } from './components/modulos/bootstrap4/alerts/alerts.component';
import { BadgeComponent } from './components/modulos/bootstrap4/badge/badge.component';
import { AccordionComponent } from './components/modulos/bootstrap4/accordion/accordion.component';
import { CarouselComponent } from './components/modulos/bootstrap4/carousel/carousel.component';
import { CollapseComponent } from './components/modulos/bootstrap4/collapse/collapse.component';
import { DatepickerComponent } from './components/modulos/bootstrap4/datepicker/datepicker.component';
import { DropdownComponent } from './components/modulos/bootstrap4/dropdown/dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PipesComponent,
    CapitalizadoPipe,
    Ng2chartsComponent,
    CardCodeComponent,
    ResaltadoDirective,
    EmpezandoComponent,
    Ng2translateComponent,
    NgckeditorComponent,
    AngularfireComponent,
    IntroducionComponent,
    Bootstrap4Component,
    AlertsComponent,
    BadgeComponent,
    AccordionComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    ChartsModule,
    CKEditorModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
