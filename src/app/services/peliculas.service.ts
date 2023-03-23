import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl : string = "https://api.themoviedb.org/3/";
  public carteleraPage : number = 1;
  cargandoData : boolean = false;
  constructor( private http : HttpClient ) { }

  get params () {
    return {
      api_key : '9e4afb290255ea11edae55d1470a2da6',
      language : 'es-ES',
      page : this.carteleraPage.toString()
    }
  }

  resetearCarteleraPage() {
    this.carteleraPage = 1;
  }
  getCartelera():Observable<CarteleraResponse> {
    this.cargandoData = true;
    return this.http.get<CarteleraResponse>( `${this.baseUrl}movie/now_playing` , { params: this.params } )
          .pipe( tap( ()=> {
            this.carteleraPage += 1;
            this.cargandoData = false;
        }))
  }

  getPeliculas( termino : string ) : Observable <Movie[]> {
      const params = { ...this.params, query: termino, page : "1"}
      return this.http.get<CarteleraResponse>(`${this.baseUrl}search/movie`, { params } )
          .pipe(
            map( (data : any ) => {
              return data.results;
            })
          )
  }
}
