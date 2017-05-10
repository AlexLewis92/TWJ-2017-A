//MAP
//Operadores

let arreglo = [8,10,7,9,6,4,5,3,6];

let resultado=arreglo.map((valor,indice)=>{
        return valor/5;

});
console.log(resultado);


let arreglo1 = [{
    nombre:'Dario' //Sr. Dario
},{
    nombre:'Maria'//Sra. Maria
}];

let resul= arreglo1.map((usuario)=>{
    usuario.nombre="Sr. o Sra. "+usuario.nombre
usuario.fechaCreacion =new Date();
usuario.anoCreacion=usuario.fechaCreacion.getFullYear()
return usuario;
});

console.log(resul);

