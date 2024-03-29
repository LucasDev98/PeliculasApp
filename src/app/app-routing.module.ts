import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';



const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'buscar/:id', component: BuscarComponent },
    { path: '**', redirectTo: 'home'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
