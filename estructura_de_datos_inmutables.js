//ESTRUCTURA DE DATOS INMUTABLE

const Daniel={
    nombre: 'Daniel',
    apellido: 'Acre',
    edad: 28,
}
//Efecto del lado
//const cumpleaños = persona => persona.edad++

const cumpleañosInmutable = persona =>({
    ...persona,//Desglosar
    //Y crean un nuevo objeto con los tributos
    edad:persona.edad+1
})
console.log(Daniel) //Original Es inmutable
console.log(cumpleañosInmutable(Daniel)) 
console.log(Daniel)// Los atributos del original no cambian
const DanielViejo = cumpleañosInmutable(Daniel)
console.log(cumpleañosInmutable(DanielViejo)) 

