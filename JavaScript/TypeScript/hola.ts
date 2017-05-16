//let lets:boolean=false;

//arreglos
let notas: number []=[1,2,3,4,5];
let jaladas:Array<number>=[1,2,3,4];

let nombre:any = "asd";
nombre =12;
let usuario:UsuarioLogin={
    nombre:"dario",
    apellido:"naranjo"
}
interface UsuarioLogin{
    nombre:string,
    apellido:string,
    //para qun parametro sea opcional se pone el signo de interrogacion
    direccion?:string
}

class Persona{
    nombre:string;
    apellido:string;
    fechaNacimiento:Date;
    constructor(nombre?:string,
                apellido?:string,
                fechaNacimiento?:Date){

    }
    imprimirPersona(){
        console.log(this.nombre,this.apellido);
    }
}

let alex:Persona=new Persona();


