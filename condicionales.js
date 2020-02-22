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
    const MAYORIA_EDAD = 18
    if(persona.edad > MAYORIA_EDAD){
        console.log("Es mayor de edad")
    }else{
        console.log("Es menor de edad")
    }
}
imprimirProfesion(daniel)
imprimirProfesion(mike)