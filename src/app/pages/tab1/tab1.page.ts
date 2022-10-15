import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas:Pelicula[] = [];

  constructor(private peliculasServices:PeliculasService) {}
  ngOnInit() {
    this.peliculasServices.getPeliculas().subscribe(resp=>{
      console.log(resp.peliculas);
      this.peliculas = resp.peliculas
    })
  }

}
