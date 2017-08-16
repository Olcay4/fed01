import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
All created components can be imported via here.
 */
import { PeoplesComponent } from './peoplesComponents/app.peoples.component';
import { PeoplesDetailComponent } from './peoplesComponents/app.people-detail.component';
import { MoviesComponent } from './moviesComponents/app.movies.component';
import { MoviesDetailComponent } from './moviesComponents/app.movies-detail.component';
import { PlanetsComponent } from './planetComponents/app.planets.component';

/**
All Link paths come here
 */
const routes: Routes = [
  { path: 'pc', component: PeoplesComponent },
  { path: 'pc/:id', component: PeoplesDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MoviesDetailComponent },
  { path: 'planets', component: PlanetsComponent }
];

/**
Declaration of all components.
 */
export const RoutingComponents = [PeoplesComponent, PeoplesDetailComponent, MoviesComponent, MoviesDetailComponent, PlanetsComponent];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }