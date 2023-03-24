import { Component, Input, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrls: ['./poster-grid.component.css']

})
export class PosterGridComponent implements OnDestroy {
    max = 10;
    isReadonly = false;
    @Input()movies! : Movie[];

    @HostListener('window:scroll', ['$event'])

    onScroll() {
        const viewHeigth = ( document.documentElement.scrollTop || document.body.scrollTop )+ 1000;
        const max = document.documentElement.scrollHeight || document.body.scrollHeight;
       if( this.peliculasService.cargandoData ){ return }

       if ( viewHeigth >= max ) {
        console.log('cargando pelicula');
        this.peliculasService.getCartelera()
            .subscribe( data => {
              this.movies.push( ...data.results );
            })
        }
    }
    constructor( private peliculasService : PeliculasService,
                 private router : Router ){ }
    ngOnDestroy(): void {
      this.peliculasService.resetearCarteleraPage()
    }

    verPelicula( pelicula : Movie ){
        const { id } = pelicula;
        if( id === 0  ) { return }
        this.router.navigate([`pelicula/${id}`]);
    }
}
