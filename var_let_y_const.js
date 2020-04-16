var holiver= {
    nombre: 'Holiver',
    apellido: 'Heldes',
    edad: 28
}

//USO DE VAR
//var da mayor acance a la variable
//Alcance blobal
function esMayor(persona){ 
    // *var mensaje*  con var el lo hace de manera automatica sin declararlo 
    if(persona.edad > 18){
       var mensaje = 'Es mayor de edad'
       var mensaje2 //var da mayor acance a la variable
    }else{
        var mensaje = 'Es menor de edad'
    }
    console.log(mensaje,mensaje2) //Sin declara mensaje pero tiene alcance 
}
//USO DE LET
//Let reduce el alcance de la variable
//alcance lo reduce al bloque
function esMayorlet(persona){
    let mensajes // ES IMPORTENTE DECLARARLO PRIMRO LA VARIBLE LET
    //let mensajes //Se deve asignar primero la variable let para usarla
    if(persona.edad > 18){
        //Let reduce la existencia de la variable al bloque 
        mensajes = 'Es mayor de edad'
    }else{
        mensajes = 'Es menor de edad'
    }
    console.log(mensajes)
}

//USO DE CONST
function esMayorConst(persona){
    const MAYOR_EDAD = 18 //Const no se puede reasignar
    var mensaje
    if(persona.edad > MAYOR_EDAD){ // Uso de const y no se puede reasignar
        mensaje = 'Es mayor de edad'
    }else{
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}
//Var se puede acceder a 'i' desde afuera del for
for(var i= 0;i<10;i++){
    console.log(i)
}


// con let no se puede acceder a 'a' fuera del for
for(let a= 0;a<10;a++){
    console.log(i)
}

esMayor(holiver)
esMayorlet(holiver)
esMayorConst(holiver)