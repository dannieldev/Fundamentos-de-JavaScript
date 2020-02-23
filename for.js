var daniel ={
    nombre: 'Daniel',
    apellido: 'Crespin',
    edd: 20,
    peso:75,
}

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso}kg`)
//function aumentapeso(peso){
 //   return personalbar.peso +=200
//}
const INCREMENTO_PESO = 0.2
const  DIASAÑO = 365

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i= 1; i <= DIASAÑO; i++){
    var random = Math.random()
    if(random<0.25){
        aumentarPeso(daniel)
    }else if(random < 0.5){
        adelgazar(daniel)
    }
}

console.log(`Al Final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(2)}kg`)