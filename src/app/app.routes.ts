import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/tutorial/pipes/pipes.component';

const  APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tutorial/pipes', component: PipesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
