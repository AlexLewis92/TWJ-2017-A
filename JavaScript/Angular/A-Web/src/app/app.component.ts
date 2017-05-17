import { Component } from '@angular/core';

@Component({
  selector: 'TWJ-A',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

/*export class AppComponent {
  title = 'app work!';
}*/


export class AppComponent{
  usuario:UsuarioInt={
    nombre:"Dario",
    apellido:" Naranjo"
}

url:string="https://angular.io";

src:string="https://webdev.dartlang.org/angular/images/angulardart.svg";
constructor(){
    console.log("constructor");
    this.holaMundo();
    console.log(this.saludar(this.usuario.nombre,
    this.usuario.apellido))
}
holaMundo(){
  console.log("Hola Mundo");
}
saludar(nombre:string,
apellido?:string):string{
  return `Hola ${nombre}${apellido}`;
}
}

interface UsuarioInt{
  nombre:string,
  apellido:string
}
