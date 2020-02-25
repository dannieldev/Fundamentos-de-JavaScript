//Prototipos 
//No hay clases hay prototipos 
// No hay herencia de clase hay herencia prototypal

class People{
    constructor (nombre,apellido,estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    saludar(fn){
        var {nombre,apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre,apellido,false)
        }
    }
    alto(){
        return  this.altura > 1.8
    }
}
class Desarrollador extends People{
    constructor (nombre,apellido,altura){
        //Super es el constructor del padre
        super(nombre,apellido,altura)
    }
    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var {nombre,apellido} = this
        console.log(`Hola , me llamo ${nombre} ${apellido} y soy Programador`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}
function responderSaludo(nombre, apellido,esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log(`No sabia que eras desarrollador`)
    }
}
var dann = new People('Dann','cres',1.70)
var kique = new Desarrollador('kique','lop',1.40)
var frec = new Desarrollador('Frec','Flezx',1.80)
dann.saludar()
kique.saludar(responderSaludo)
frec.saludar(responderSaludo)
frec.alto()
