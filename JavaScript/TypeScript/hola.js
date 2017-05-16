//let lets:boolean=false;
//arreglos
var notas = [1, 2, 3, 4, 5];
var jaladas = [1, 2, 3, 4];
var nombre = "asd";
nombre = 12;
var usuario = {
    nombre: "dario",
    apellido: "naranjo"
};
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
    };
    return Persona;
}());
var alex = new Persona("dario", "naranjo");
alex.imprimirPersona();
