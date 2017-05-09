console.log('Hola Mundo');
var dario = {
    nombre: 'dario',
    apellido: 'naranjo',
    fechaNacimiento: new Date(),
    imprimir: function () {
        console.log(dario.nombre, dario.apellido);
    },
    ano:function () {
        return this.fechaNacimiento.getFullYear();
    },
    diferenciaEdad: function (edadAComparar) {
        return Math.abs(this.ano()-edadAComparar);
    }
}
dario.imprimir();
console.log(dario.ano());
console.log(dario.diferenciaEdad(2000));
