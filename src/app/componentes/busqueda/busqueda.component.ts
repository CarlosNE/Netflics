import { Component, OnInit } from "@angular/core";
import { TmdbService } from "src/app/servicios/tmdb.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit {
  peliculas: any = [];
  generos: any = [];
  peliculasGenero: any = [];

  constructor(private tmdb: TmdbService) {
    this.getGeneros();
  }

  ngOnInit() {}

  getPeliculas(termino: string) {
    this.tmdb.getBusquedaPeliculas(termino).subscribe((data: any) => {
      console.log(data);
      this.peliculas = data;
    });
  }

  getGeneros() {
    this.tmdb.getGeneros().subscribe((data: any) => {
      console.log(data);
      this.generos = data.genres;
    });
  }
  getPeliculasGenero(termino: string) {
    console.log(termino);
    this.tmdb.getPeliculasGenero("asd").subscribe((data: any) => {
      console.log(data);
      this.peliculasGenero = data;
    });
    console.log(this.peliculasGenero);
  }
}
