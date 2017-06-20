import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PaginaComponent } from './Componentes/pagina/pagina.component';
import { PlanetasComponent } from './Componentes/planetas/planetas.component';
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { ClimateComponent } from './Componentes/climate/climate.component';
import { DiameterComponent } from './Componentes/diameter/diameter.component';
import { GravityComponent } from './Componentes/gravity/gravity.component';
import { OrbitalPeriodComponent } from './Componentes/orbital-period/orbital-period.component';
import { TerrainComponent } from './Componentes/terrain/terrain.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PaginaComponent,
    PlanetasComponent,
    PlanetaStarWarsComponent,
    ClimateComponent,
    DiameterComponent,
    GravityComponent,
    OrbitalPeriodComponent,
    TerrainComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],

  bootstrap: [InicioComponent]


})
export class AppModule { }
