//Objetos
var daniel ={
    nombre: 'Daniel',
    apellido:'Crespin',
    edad:20,
}

var mike ={
    nombre: 'Mike',
    apellido:'Tiue',
    edad:30,
}
function printNombreUp(persona){
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(persona.nombre.toUpperCase())
}

printNombreUp(daniel)
printNombreUp(mike)

function cumpleaños(persona){
    return{
        ...persona,
        edad: persona.edad+=1
    }
}

