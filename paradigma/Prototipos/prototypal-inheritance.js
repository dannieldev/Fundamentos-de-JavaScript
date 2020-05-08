function Hero(name){
    this.name = name
}
Hero.prototype.saludar = function(){
    console.log(`Hola Soy ${this.name}`)
}

const zelda = new Hero('Zelda')


//Propiedades de la instancia
console.log('Name:', zelda.name)

//PROPIEDADES DE LA 'CLASE'

console.log('Saludar:', zelda.name.name)

//PROPIEDADES HEREDADASEJ: toString

console.log('ToString:', zelda.toString)

//hasOwnProperty (DE DONDE SALE toString o esta?)
console.log(
    'zelda.hasOwnProperty("name")',
    zelda.hasOwnProperty("name")
)
console.log(
    'zelda.hasOwnProperty("saludar")',
    zelda.hasOwnProperty("saludar")
)

// console.log('Name:', zelda.name.name)

//INSPECCIONEMOS EL PROTORIPO DEL ZELDA

//INSPECCIONEMOS EL PROTOTIPO DEL HERO

//IMSPECCIONEMOS EL PROTOTIPO DEL OBJECT