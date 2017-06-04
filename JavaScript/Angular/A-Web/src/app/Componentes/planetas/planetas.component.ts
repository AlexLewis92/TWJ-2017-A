import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";


@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  planetas: PlanetasStarWars;

  constructor(private _http:Http) { }

  ngOnInit() {
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
  residents: string[];
  films: string[];
  created:string;
  edited: string;
  url: string;

}

