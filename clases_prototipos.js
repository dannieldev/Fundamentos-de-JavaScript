//Prototipos 
//No hay clases hay prototipos 
// No hay herencia de clase hay herencia prototipal
function heredaDe(prototiposHijo, prototipoPadre){
    var fn  = function(){}
    fn.prototype = prototipoPadre.prototype
    prototiposHijo.prototype = new fn
    prototiposHijo.prototype.constructor = prototiposHijo  
}
function Persona(){
    console.log('Good persona')
}
//Pasar parametro 
function People(nombre,apellido,estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}
People.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
People.prototype.alto = function(){
    if(this.estatura >= 1.80){
        console.log('Soy alto')
    }
}
function Desarrollador(nombre,apellido){
    this.nombre = nombre 
    this.apellido = apellido
}

heredaDe(Desarrollador,People)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola , me llamo ${this.nombre} ${this.apellido} y soy Programador`)
}

var daniel = new Persona()
var dann = new People('Dann','cres',1.70)
var frec = new People('Frec','Flezx',1.80)
dann.saludar()
frec.saludar()
frec.alto()
