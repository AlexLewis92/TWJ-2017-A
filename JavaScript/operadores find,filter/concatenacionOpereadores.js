//FIND Y FILTER
//Operadores

let arreglo = [8,10,7,9,6,4,5,3,6];

let resultado=arreglo.map((valor,indice)=>{
        return valor/5;

})//filtra de acuerdo a un parametro que se le da
.filter((valor)=>{
    return valor>=1;

})//encuentra la primera ocurrencia, si no encuentra nada devuelve undefined
.find((valor)=>{
    return valor ==1.7;
});

console.log(resultado);

