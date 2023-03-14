import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CarteleraResponse } from '../interfaces/cartelera-response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http : HttpClient ) { }


  getCartelera():Observable<CarteleraResponse> {

    return this.http.get<CarteleraResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=9e4afb290255ea11edae55d1470a2da6&language=es-ES&page=1");
  }
}
