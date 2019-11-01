import { Component, OnInit } from "@angular/core";
import { TmdbService } from "src/app/servicios/tmdb.service";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  peliculas: any = [];
  constructor(private tmdb: TmdbService) {
    this.tmdb.getDiscoverMovies().subscribe((data: any) => {
      console.log(data);
      this.peliculas = data;
    });
  }

  ngOnInit() {}
}
