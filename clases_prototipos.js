//Prototipos 
//No hay clases hay prototipos 
// No hay herencia de clase hay herencia prototypal

class People{
    constructor (nombre,apellido,estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
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
    saludar(){
        console.log(`Hola , me llamo ${this.nombre} ${this.apellido} y soy Programador`)
    }
}
var dann = new People('Dann','cres',1.70)
var frec = new People('Frec','Flezx',1.80)
dann.saludar()
frec.saludar()
frec.alto()
