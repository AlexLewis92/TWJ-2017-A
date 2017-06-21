import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "../../../twj-examen-api-naranjo-dario/src/app/Componentes/inicio/inicio.component";
import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by USRDEL on 21/6/17.
 */


export const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"pagina2",
    component:Pagina2Component
  }
]

export const ModuloDeRutas:ModuleWithProviders=
  RouterModule.forRoot(routes);
