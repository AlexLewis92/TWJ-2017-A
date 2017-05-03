//void: no devuelven nada

function holaMundo() {
    console.log('Hola Mundo');
}
holaMundo();

//el doble de un entero
function doble (numero) {
    return numero*2;
}
console.log(doble(2));

//devueva la multiplicacion de 2 num
function multiplica2 (a, b) {
    return a*b;
}
console.log(multiplica2(4,3));
// una funcion en una variable
var resultado = multiplica2(1,2);
//se guarda toda la funcion
var multiplicar = multiplica2;
console.log(multiplicar(4,6));

//funciones anonimas
var hola = function () {
    console.log('hola')
};
hola();
console.log(hola());
////
function hazAlgo(algo){
    algo()
}
hazAlgo(function () {
    console.log('hola')
});
