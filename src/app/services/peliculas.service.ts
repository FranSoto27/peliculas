import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculasResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getPeliculas(){
    return this.http.get<PeliculasResponse>('https://backend-peliculas.herokuapp.com/peliculas')
  }
}
