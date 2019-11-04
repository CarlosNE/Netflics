import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./componentes/home/home.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { TarjetaComponent } from "./componentes/tarjeta/tarjeta.component";
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TarjetaComponent,
    PeliculaImagenPipe,
    PeliculasComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
