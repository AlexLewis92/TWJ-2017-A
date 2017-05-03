//en javaScrip se define una variable con la palabra reservada <var>

//enteros
var dos= 2 ;
var tres = 3 ;
var quince= 15 ;
var diezYSiete= 17 ;

console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);

//float
var dosPuntoCinco= 2.5 ;
console.log(dosPuntoCinco);

//todas las demas
var verdaderoOFalso=  true;
var  falso = false ;
var nombre = 'Dario' ;
var negativo = -4 ;
var fechaNacimiento = new Date();


var cuatroString = '4';
cuatroString = 4;
cuatroString = false;
cuatroString = -54;
cuatroString = new Date();
var variable;
console.log(variable);

var numero2 = 2 ;
console.log(typeof numero2);

///objetos Json
var dario = {
    id:1,
    nombre : 'Dario' ,
    createdAt: new Date(),
    updatedAt: new Date(),
    casado : true,
    prestamos : false,
    hijos: null,
    altura: 1.78,
    negativo:-1,
    mascota:{
        nombre:'lola',
        fechaNacimiento:new Date()
    }
};
console.log(dario)
console.log('Altura:',dario.altura)
dario.altura=1.58;
console.log('Altuta:',dario.altura)

//borrando atributos del objeto
delete dario.altura;
console.log('Objeto',dario)
//añadir atributos a un objeto
dario.juegos='varios'
console.log('Objeto',dario)

//arreglos
var arreglo =
    [
        1,'dar', 2.4, false, true, null, undefined, new Date(),-234,
        {
            a:'b'
        }
];

console.log(arreglo[4]);
//arreglos dentro de un objeto
var nuevoObjeto = {

    papas: ['chola', 'chaucha', 'maria'],
    cebollas: ['paiteña','perla','blanca']
}
console.log(nuevoObjeto.papas[0]);
//matrices
var matriz = [[0,1],[2,4]];
console.log(matriz[0][0]);

var arregloDeObjetos =[
    {
        id:1,
        nombre:'Dario'
    },
    {
      id:2,
        nombre:'Felipe'
    }
];
//splice delimita la posicion en que se desea trabajar( borrar o añadir)

console.log('Despues:',arregloDeObjetos.splice(0,1));
