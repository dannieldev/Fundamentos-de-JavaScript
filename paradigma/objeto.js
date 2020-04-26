//Function Auto Invocada o anonima  JAVAScrip Orientado a prototipos
((c,d)=>{
    c('Onjeto literal')
    //Objeto literal
    const perro={
        nombre : 'Kenai',
        edad: 4,
        raza:'Mestizo',
        genero: 'Macho',
        esterilizado: true,
        ladra(){
            c('guauu guauu')
        },
        comer(comida='croquetas'){
            c(`${this.nombre} come ${comida}`)
        },
        aparecer(imagen){
            d.write(`<img src="${imagen}">`);
        }
    }
    c(
        perro,
        perro.nombre,
        perro.edad,
        perro.raza,
        perro.genero
    )
    perro.ladra()
    perro.comer("pollo")
//2 Prototipo Objeto
c('Prototipo Obtect');
const perro2 = new Object()
perro2.nombre = 'Filus',
perro2.edad = 4,
perro2.raza = 'Dalmata',
perro2.genero ='Macho',
perro2.esterilizado =false,
perro2.ladra=()=>c('Wuauu Wuas')
perro2.comer = (comida = 'croquetas') => c(`${perro2.nombre} come ${comida}`)
perro2.aparecer = imagen => d.write(`<img src="${imagen}">`)

c(
    perro2,
    perro2.nombre,
    perro2.edad,
    perro2.raza,
    perro2.genero,
    perro.esterilizado
)
//perro2.edad()
// 3. Funcion Constructora
c("Funcion Constructora")
function Perro (nombre, edad,raza,genero,esterilizado){
    //Atributos
    this.nombre = nombre,
    this.edad = edad,
    this.raza = raza,
    this.genero = genero,
    this.esterilizado = esterilizado

    //metodos
    this.ladra=()=>c('Wuauu Wuas')
    this.comer = (comida) => c(`${this.nombre} come ${comida}`)
    this.aparecer = imagen => d.write(`<img src="${imagen}">`)
}

const perro3 = new Perro('Lazy',10,'Gran Danés','Macho',false),
perro3_2 = new Perro('Looa',7,'Border','Hembra',true)
c(
    perro3,
    perro3.nombre,
    perro3.edad,
    perro3.raza,
    perro3.genero,
    perro3.esterilizado,
    perro3_2,
    perro3_2.nombre,
    perro3_2.edad,
    perro3_2.raza,
    perro3_2.genero,
    perro3_2.esterilizado
)
perro3.ladra()
perro3.comer('Papas')
perro3_2.ladra()
perro3_2.comer('zapatro')

//Clase Apartir de ES6
c('Clase Apartir de ES6')
class Dog {
    constructor(nombre, edad,raza,genero,esterilizado){
    //Atributos
    this.nombre = nombre,
    this.edad = edad,
    this.raza = raza,
    this.genero = genero,
    this.esterilizado = esterilizado
    }
    //metodos
    ladra(){
        c('Wuas Wuas')
    }
    comer(comida){
        c(`${this.nombre} come ${'comida'}`)
    }
    aparecer(imagen){
        d.write(`<img src="${imagen}">`)
    }
}
const perro4 = new Dog('Lazsy',1,'Gran Danés','Macho',false),
perro4_2 = new Dog('Looa',2,'Border','Hembra',false)
c(
    perro4,
    perro4.nombre,
    perro4.edad,
    perro4.raza,
    perro4.genero,
    perro4.esterilizado,
    perro4_2,
    perro4_2.nombre,
    perro4_2.edad,
    perro4_2.raza,
    perro4_2.genero,
    perro4_2.esterilizado
)
perro4.ladra()
perro4.comer('Papases')
perro4_2.ladra()
perro4_2.comer('zapatros')

})(console.log,document);