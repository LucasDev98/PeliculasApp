import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
    movies : Movie[] = [];
    textoBusqueda! : string;
    constructor( private activateRoute : ActivatedRoute,
                 private peliculasService : PeliculasService ){

        this.activateRoute.params.subscribe( ( data : any ) => {
            this.textoBusqueda = data.id;
            this.peliculasService.getPeliculas( data.id ).subscribe
                ( ( data : any  ) => {
                this.movies = data;
            })
        })
    }
}
