import { RouterModule, Routes } from '@angular/router';
import { EmpezandoComponent } from './components/empezando/empezando.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/tutorial/pipes/pipes.component';
import { Ng2chartsComponent } from './components/modulos/ng2charts/ng2charts.component';
import { Ng2translateComponent } from './components/modulos/ng2translate/ng2translate.component';
import { NgckeditorComponent } from './components/modulos/ngckeditor/ngckeditor.component';
import { AngularfireComponent } from './components/modulos/angularfire/angularfire.component';
import { IntroducionComponent } from './components/tutorial/introducion/introducion.component';

const  APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empezando', component: EmpezandoComponent },
  { path: 'tutorial/pipes', component: PipesComponent },
  { path: 'tutorial/introduccion', component: IntroducionComponent },
  { path: 'modulos/ng2charts', component: Ng2chartsComponent },
  { path: 'modulos/ng2translate', component: Ng2translateComponent },
  { path: 'modulos/ng2ckeditor', component: NgckeditorComponent },
  { path: 'modulos/angularfire', component: AngularfireComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
