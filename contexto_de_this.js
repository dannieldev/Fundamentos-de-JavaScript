
//SIEMPRE QUE SE CREA UNA FUNCION ASINCRONA CAMBIA EL THIS
//POR ESO DEBEMOS ESTAR SEGUROS QUE CONTEXTO TIENE THIS
const daniel={
    nombre: 'Daniel',
    apellido: 'Acre',
    edad: 28,
}
const frez={
    nombre: 'Frez',
    apellido: 'Acre',
    edad: 28,
}


function saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`)///This en este caso es Window
}
const saludarADaniel = saludar.bind(daniel)
const saludarAFre  = saludar.bind(frez)

saludar()
saludarADaniel()
saludarAFre()

setTimeout(saludar.bind(daniel),1000) //Otra forma de atra al this

//Mandar por parametro el saludo
function saludos(saludo = 'Hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`)///This en este caso es Window
}

setTimeout(saludos.bind(daniel,'Hola meje'),1000)
// .BIND RETORNA UNA NUEVA FUNCION CON EL CONTEXTO CAMBIADO


//call para cambiar contexto de this
saludos.call(daniel,'Hola Amigo')
//apply  para cambiar contexto de this
saludos.apply(daniel,['Hola amigis'])