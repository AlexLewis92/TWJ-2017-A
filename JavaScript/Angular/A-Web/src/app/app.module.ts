import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PaginaComponent } from './Componentes/pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PaginaComponent ]
})
export class AppModule { }
