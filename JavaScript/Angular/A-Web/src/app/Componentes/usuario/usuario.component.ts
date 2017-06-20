import {Component, Input, OnInit, Output} from '@angular/core';
import {UsuarioClass} from "../../Clases/UsuarioClass";
import {Http} from "@angular/http";
import {EventEmitter} from "selenium-webdriver";
import {emit} from "cluster";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input () usuarioLocal:UsuarioClass;ç
  @Output() usuarioborrado=new EventEmitter();
  constructor(private _http:Http) { }

  ngOnInit() {
  }
  eliminarUsuario(usuario: UsuarioClass, indice: number) {


    this._http.delete(`http://localhost:1337/Usuario/${usuario.id}`)
      .subscribe(
        respuesta => {
          console.log('Indice con index: ', usuario.id);

          this.usuarioborrado = emit(usuario);
         // this.usuarioLocal = this.usuarioLocal.filter(value => usuarioBorrado.id != value.id);

        },
        error => {
          console.log("Error", error);
        }
      );
  }

  actualizarUsuario(usuario:UsuarioClass,nombre:string)
  {
    let actualizacion = {
      nombre: usuario.nombre
    };
    this._http.put("http://localhost:1337/Usuario/" + usuario.id, actualizacion)
      .map(
        (res)=>{
          //sniippet ->templade de codigo para
          //reutilizarlo

          return res.json();
        })
      .subscribe(
        res=>{
          //el servidor nos dice que se actualizo
          console.log("El usuario se actualizo",res)
          //let indice=this.usuarios.indexOf(usuario);
          //this.usuarios[indice].nombre=nombre;
          //this.usuarios[indice].editar=this.usuarios[indice].editar;
          this.usuarioLocal.nombre=nombre;
          this.usuarioLocal.editar=!this.usuarioLocal.editar;

        },
        err=>{
          //Hubo algun problema(Red servidor)
          console.log("Hubo algun error",err);
        }
      );
  }
}
