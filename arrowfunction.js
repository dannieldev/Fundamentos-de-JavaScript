var daniel={
    nombre:'Daniel',
    apellido:'Crespin',
    edad:20,
    ingeniero:true,
    dj:false,
    cantante: true
}
var mike={
    nombre:'Mike',
    apellido:'Crespin',
    edad:10,
    ingeniero:true,
}
const MAYORIA_EDAD = 18

function imprimirProfesion(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    if(persona.dj){
        console.log("Dj")
    }
    if(persona.cantante){
        console.log("Cantante")
    }
    //ArrowFunction
    const essMayorEdad = function (persona){
        return persona.edad >=  MAYORIA_EDAD
    }
    
    if(persona.edad > MAYORIA_EDAD){
        console.log("Es mayor de edad")
    }else{
        console.log("Es menor de edad")
    }
}
const esMayorEdad = persona => persona.edad >=  MAYORIA_EDAD
console.log(esMayorEdad)

function permitirAcc(persona){
    if(!esMayorEdad(persona)){
        console.log("ACCEDSO DENENGADO")
    }
}
imprimirProfesion(daniel)
imprimirProfesion(mike)
permitirAcc(mike)

