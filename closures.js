function crearSaludo(finalDeFrase){
    return function(nombre){
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Daniel') //Hola Daniel che
saludoMexicano('Daniel') //Hola Daniel guey
saludoColombiano('Daniel') //Hola Daniel amigo

