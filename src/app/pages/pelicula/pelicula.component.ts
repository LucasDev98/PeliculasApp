import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
    movie! : MovieResponse;
    actors : Cast[] = [];
    constructor( private activateRoute : ActivatedRoute,
                 private peliculasService : PeliculasService,
                 public location : Location ){

      const { id } = this.activateRoute.snapshot.params

      this.peliculasService.getPelicula( id )
          .subscribe( data => {
            this.movie = data;
            console.log( this.movie );
          })
      this.peliculasService.getCredits( id )
          .subscribe( ( data : any ) => {
            this.actors = data.cast;
          })
    }

    regresar(){
        this.location.back()
    }
}
