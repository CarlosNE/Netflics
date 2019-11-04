import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// Importo map reactive extentions
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TmdbService {
  private apikey: string = "6a54aba1bb3979e2f60eec5276bc6d25";
  private urltmvb: string = "https://api.themoviedb.org/3";
  private generos: any = [];

  constructor(private http: HttpClient) {
    console.log("TMDB listo");
    this.getGeneros().subscribe((data: any) => {
      this.generos = data;
    });
  }

  //Metodo para pasar URL para peticion

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }
  getQueryforPelicula(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  getGeneros() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=6a54aba1bb3979e2f60eec5276bc6d25&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getPeliculasGenero(termino: string) {
    let generoFiltrado: any;
    console.log(this.generos);

    this.generos.forEach(genero => {
      if (genero.nombre === termino) generoFiltrado = genero.id;
    });
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${generoFiltrado}?api_key=6a54aba1bb3979e2f60eec5276bc6d25&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }
}
