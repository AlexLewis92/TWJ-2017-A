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
    nombre:"",
    apellido:" Naranjo",

}
  parrafo:string="";
  background:string="blue";
url:string="https://angular.io";

src:string="https://webdev.dartlang.org/angular/images/angulardart.svg";
constructor(){
  this.usuario.nombre="Alex";
  this.parrafo="Mi mama me mima";
  setTimeout(()=>{
      this.usuario.nombre="Simon"
  },3000)
}
holaMundo(){
  console.log("Hola Mundo");
}
saludar(nombre:string,
apellido?:string,parrafo?:string):string{
  return `Hola ${nombre}${apellido}`;
}
}

interface UsuarioInt{
  nombre:string,
  apellido:string
}
