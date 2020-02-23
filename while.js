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
const comeMucho =()=>Math.random() < 0.3
const realizaDeporte =() =>Math.random() < 0.4

const META = daniel.peso - 3
var dias = 0

while (daniel.peso > META){
    if(comeMucho()){
        aumentarPeso(daniel)
    }
    if(realizaDeporte()){
        adelgazar(daniel)
    }
    dias+=1
}

console.log(`Pasaron ${dias} dias hasta que ${daniel.nombre} adelgazo 3kg`)

console.log(`Al Final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(2)}kg`)