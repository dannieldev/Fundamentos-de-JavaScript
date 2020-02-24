var pepe ={
    nombre:'Pepe',
    apellido:'Gred',
    altura: 1.34,
    cantidadLibros: 21
}
var maria ={
    nombre:'Marias',
    apellido:'Hilp',
    altura: 1.34,
    cantidadLibros: 31
}
var grep ={
    nombre:'Grep',
    apellido:'Filkp',
    altura: 1.82,
    cantidadLibros: 54
}
var Osm ={
    nombre:'Osm',
    apellido:'Galie',
    altura: 1.81,
    cantidadLibros: 89
}

var personas =[maria,grep,Osm,pepe] 

for(var i=0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

//Filtrar Elementos de Array
//const esAlta = (persona)=>{
 //   return persona.altura > 1.8
//}
const esAltas = personas => personas.altura >1.8 

const esBaja =({altura}) => altura < 1.8

 //Filter
var personasAltas = personas.filter(esAltas)
//Filter segunda Opcion
var personasAltass = personas.filter(function(persona){
    return persona.altura > 1.80
})
//Filtrar personas Bajas
var personasBajas = personas.filter(esBaja)
console.log(personasAltas)
console.log(personasAltass)
console.log(personasBajas)


//MAP


const pasarAlturaCms=personas =>{
    //persona.altura = persona.altura * 100
    return {
        ...personas,
        altura: personas.altura*100
    }
}

var personaCms = personas.map(pasarAlturaCms)

console.log(personaCms)


//REDUCE
//var acum = 0
//for (var i=0;i<personas.length;i++){
//    acum = acum + personas[i].cantidadLibros
//}
const reducer = (acum,personas) =>{
    return acum + personas.cantidadLibros
}
var totallibros= personas.reduce(reducer,0)

//console.log(`En total todos tiene ${acum} libros`)
console.log(`En total todos tiene ${totallibros} libros`)


//Almacenar array con Prompt 
var news = []
var count 
console.log(news)
for(var i=0;i<=3;i++){
    var dato = prompt("Ingresa 4 datos")
    count = news.push(dato);
    console.log(news)
}

//console.log(news)




