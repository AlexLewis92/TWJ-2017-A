import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private _router: Router,
    private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    //parametros de ruta actual
    this.rutaActiva.params.subscribe(
      params=>{
        console.log("Parametros en pagina21:",params)
      }
    )
    //parametros de ruta padre
    this.rutaActiva.parent.params.subscribe(
      params=>{
        console.log("parametros de mi papa",params)
      }
    )
  }
  navegarAInicio(){
    this._router.navigate(["pagina2",12,"pagina3",21,"pagina22",123])
  }
}
