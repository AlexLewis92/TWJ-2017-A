//if
var conHambre = false;
if(conHambre){
    console.log("Como");
}else{
    console.log("trabajar");
}
//undefined y null son considerados como false ademas de cuando no se da valor a la variable
//0 es false, -1 es verdadero, 1 es verdadero
var conHambre = {};
if(conHambre){
    console.log("Como");
}else{
    console.log("trabajar");
}
var conHambre = -1;
if(conHambre){
    console.log("Como");
}else{
    console.log("trabajar");
}
//***************
var conHambre = {nombre:"Dario"};
if(conHambre){
    console.log("Como");
}else{
    console.log("trabajar");
}
//************** switch
var numero=5;
switch (numero){
    case 1:
        console.log(numero);
        break;
    case 5:
        console.log("Es cinco");
        break;
    default:
        console.log("No es nu 1 ni 5")
}

