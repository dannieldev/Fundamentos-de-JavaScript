var nombre = 'Daniel', edad = 20

function imprimirEdad(n, e){
    console.log(`${n} tiene ${e}`)
}

imprimirEdad(nombre,edad)
imprimirEdad('Carlos',edad)

//Alcanse de la fumciones 

var nombres = 'Eliseo'
function nombrex(n){
    // n= nombress alcance local 
    n= n.toUpperCase()
    console.log(n)
}

nombrex(nombres)
console.log(nombres)

//Funcion Suma

function suma(a,b){
    console.log(a+b) 
}

suma(2,5)
