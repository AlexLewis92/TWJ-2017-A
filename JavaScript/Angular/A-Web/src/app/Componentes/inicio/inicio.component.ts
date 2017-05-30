import {Component, OnInit} from '@angular/core';
//comand+a y luego command command+alt+l
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = 'Dario';

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
    }
  ]

  constructor() {
  }

  ngOnInit() {

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


}
