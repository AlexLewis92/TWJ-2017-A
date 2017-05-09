//FAT ARROW FUNCTIONS
var holaMundo = function(){
    console.log("Hola Mundo")
}
holaMundo()

var holaMundo2 = () => {
    return "holaMundo2"
}
holaMundo2()

var holaMundo3 = ()=> "Hola Mundo3"
holaMundo3()

var holaMundo4 = (nombre)=> `Hola: ${nombre}`
holaMundo4('Alex')

var holaMundo5 = apellido=> `Hola: ${apellido}`
holaMundo5('Naranjo')

var holaMundo6 = (nombre,apellido)=> `Sr: ${apellido} ${nombre}`
holaMundo6('Alex','Herondale')



