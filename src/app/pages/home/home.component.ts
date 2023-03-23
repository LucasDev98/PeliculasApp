import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public moviesSlideShow : Movie [] = [];
    public movies : Movie[] = [];
    constructor( private peliculasApp : PeliculasService ) {

         this.peliculasApp.getCartelera().subscribe( data => {
          this.moviesSlideShow = data.results;
          this.movies = data.results;
        })
    }
}
