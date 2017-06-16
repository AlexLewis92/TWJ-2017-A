import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {juegoInterface} from "../../interface/JuegoInterface";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos : juegoInterface[] = []
  constructor(private _http: Http) {
  }

  ngOnInit() {
  }

  cargarJuego() {
    this._http
      .get("http://www.clashapi.xyz/api/cards")
      //.map(response=>response.json())
      .subscribe(
        (response) => {
          console.log("Response:", response);
          console.log(response.json());
          let respuesta = response.json();
          console.log(respuesta.next);
          this.juegos = respuesta;
          /*this.planetas = this.planetas.map(
           /*(planeta) => {

           planeta.imagenURL = "/assets/Imagenes/" + planeta.name + '.jpg';
           return planeta;
           }
           );*/
        },
        (error) => {
          console.log("Response:", error);
        },
        () => {
          console.log("finally");
        }
      )

  }
}
