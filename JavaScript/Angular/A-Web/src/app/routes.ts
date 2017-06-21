import {RouterModule, Routes} from "@angular/router";

import {Pagina2Component} from "./Componentes/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
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
