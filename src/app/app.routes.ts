import { RouterModule, Routes } from '@angular/router';
import { EmpezandoComponent } from './components/empezando/empezando.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/tutorial/pipes/pipes.component';
import { Ng2chartsComponent } from './components/modulos/ng2charts/ng2charts.component';
import { Ng2translateComponent } from './components/modulos/ng2translate/ng2translate.component';
import { NgckeditorComponent } from './components/modulos/ngckeditor/ngckeditor.component';
import { AngularfireComponent } from './components/modulos/angularfire/angularfire.component';
import { Bootstrap4Component } from './components/modulos/bootstrap4/bootstrap4.component';
import { IntroducionComponent } from './components/tutorial/introducion/introducion.component';
import { Ng2animateComponent } from './components/modulos/ng2animate/ng2animate.component';
import { Ng2nouisliderComponent } from './components/modulos/ng2nouislider/ng2nouislider.component';

const  APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empezando', component: EmpezandoComponent },
  { path: 'tutorial/pipes', component: PipesComponent },
  { path: 'tutorial/introduccion', component: IntroducionComponent },
  { path: 'modulos/ng2charts', component: Ng2chartsComponent },
  { path: 'modulos/ng2translate', component: Ng2translateComponent },
  { path: 'modulos/ng2ckeditor', component: NgckeditorComponent },
  { path: 'modulos/angularfire', component: AngularfireComponent },
  { path: 'modulos/bootstrap4', component: Bootstrap4Component },
  { path: 'modulos/ng2animate', component: Ng2animateComponent },
  { path: 'modulos/ng2uislider', component: Ng2nouisliderComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
