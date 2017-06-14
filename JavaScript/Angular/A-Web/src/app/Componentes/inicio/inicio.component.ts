import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {UsuarioClass} from "../../Clases/UsuarioClass";
import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";


//comand+a y luego command command+alt+l
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Dario";


  usuarios:UsuarioClass[] = [];

  nuevoUsuario:UsuarioClass = new UsuarioClass("");

  planetas : PlanetaStarWarsInterface[] = []

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

  constructor(private _http: Http) {
    //inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO

  }
  ngOnInit() {
  //AQUI SI ESTA LISTO EL COMPONENTE
    this._http
      .get("http://localhost:1337/Usuario/")
      .subscribe(
        respuesta=>{
          let rjson:UsuarioClass[] = respuesta.json();
          //const rjson: UsuarioClass[] = respuesta.json();
          this.usuarios = rjson;

          console.log("Usuarios: ",this.usuarios);
        },
        error=>{
          console.log("Error: ",error)

        }
      );


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

            this.planetas=this.planetas.map(
              (planeta)=>{
                planeta.imagenURL="/assets/Imagenes/"+planeta.name+'.jpg';

                return planeta;
              }
            );
          },
        (error)=>{
          console.log("Response:",error);
        },
        ()=>{
          console.log("finally");
        }
      )
  }


  crearUsuario(){
    console.log("Entro a crear Usuario");
    let usuario : UsuarioClass = {
      nombre:this.nuevoUsuario.nombre
    }
    this._http
      .post("http://localhost:1337/Usuario/",usuario)
      .subscribe(
        respuesta =>{
          console.log(respuesta);
          this.usuarios.push(respuesta.json());
          this.nuevoUsuario={};

        },
        error=>{
          console.log("Error",error);
        }
      );

  }

  eliminarUsuario(usuario:UsuarioClass, indice: number){


    this._http.delete(`http://localhost:1337/Usuario/${usuario.id}`)
      .subscribe(
        respuesta => {
          console.log('Indice con index: ', usuario.id);
          let usuarioBorrado;
          usuarioBorrado = respuesta.json();
          this.usuarios = this.usuarios.filter(value => usuarioBorrado.id != value.id);

        },
        error => {
          console.log("Error", error);
        }
      );


  }

}

