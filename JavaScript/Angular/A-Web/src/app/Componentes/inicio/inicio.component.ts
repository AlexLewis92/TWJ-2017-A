import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


//comand+a y luego command command+alt+l
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = 'Dario';

  planetas: PlanetasStarWars;

  arregloUsuarios = [
    {
      nombre: "Dario",
      apellido: "Naranjo",
      conectado:true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado:true
    }, {
      nombre: "Abdala",
      apellido: "Bucaran",
      conectado:false
    },
    {
      nombre: "Juan",
      apellido: "Flores",
      conectado:true
    }
  ]

  constructor(private _http:Http) {
    //inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO

  }
  ngOnInit() {
  //AQUI SI ESTA LISTO EL COMPONENTE
  }

  cambiarNombre(): void {
    this.nombre = 'Rafico a lenin';
  }

  cambiarOtroNombre() {
    this.nombre = 'Lenin a Rafico';
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.value);
    this.nombre = nombreEtiqueta.value;

  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json())
      .subscribe(
        (response)=>{
          console.log("Response:",response);
          console.log(response.json());
          let respuesta=response.json();
          console.log(respuesta.next);
          this.planetas=respuesta.results;
        },
        (error)=>{
          console.log("Response:",error);
        },
        ()=>{
          console.log("finally");
        }
      )
  }


}

interface PlanetasStarWars{
  name:string;
  rotation_period: number;
  orbital_period: number;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: string;

}
