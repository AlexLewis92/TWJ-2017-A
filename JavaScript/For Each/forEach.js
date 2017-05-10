//foreach
//operadores

let arregloNumeros = [1,2,3,4,5,6];

//let resultado = arregloNumeros.forEach(numero,indice){
//	console.log(indice,numero);
//}

let resultado = arregloNumeros.forEach ((numero,indice)=>{
        console.log(indice,numero);
})
console.log('Resultado',resultado)


function makeForEach(arreglo){
    for(var i = 0; arreglo.lenght; i++){
        console.log(arreglo[i])
        console.log(i)
        console.log(arreglo)
    }
}
makeForEach(arregloNumeros);

function makeForEach(arreglo,funcion){
    for(var i = 0; arreglo.lenght; i++){
        funcion(arreglo[i],i,arreglo)
    }
}