console.log("Hola Typescript");
console.log("Hola Typescript");

function add( a: number,b:  number){
    return (a+b);
}

console.log(add(2,3));

//Boolean 
let muted:boolean = true;
muted = false;
//Numeros
let numero:number = 42;
let denomina:number = 6;
let result = numero/ denomina;

//String
let nombre:string = "Dan";
let saludo:string = `Me llamo ${nombre}`

//Arreglos
let people: string[] = []; //Un arreglo solo de string
people= ["Juan","mile","lopes"]

//people.push(322)
let peopleAndNumber: Array<string | number> = [] //Poder ingresar numeros y letras
peopleAndNumber.push("Mike")
peopleAndNumber.push("Fredy")
peopleAndNumber.push(32354)

//Enum
enum Color{ // Lista de valores
    rojo ="rojo",
    verde ="verde",
    azul="azul"
}

let colorFavorito: Color= Color.azul; // no se le puede Asignar uno que no sea de la lista
console.log(`Mi color favorito es ${colorFavorito}`);

//Any  Permite poner diferentes tipos de valores a una variable
let comodin:any ="Jo";
comodin = {type:"asfd"};

//Object
let someObject = {type:"asfd"};
let Objects:object = {type:"asfd"};

//FUNCIONES
//Tyscript esta fuertemente tipado 
//Poder asignar que tipo de valor entra o sale de la función
function Addplus(a:number,b:number):number{ 
    return a+b;
}
const sum = add(3,5);

//Funciones que retornan otra funcion
//Asignar valor que entra y sale de las funciones
function createAddre (a:number): (number)=>number{ //valor de regreso una funcion
    return function(b:number){
        return a+b;
    }
}

const AddFour = createAddre(5);
const fourPlus = AddFour(6);


//En caso de que no haya un paramtro (Agregando un ? para dejarlo en caso no se encuentra)
function fullName(firstName:string, LastName?:string):string{
    return `${firstName} ${LastName}`
}
function DefaulName(firstName:string ="Anonimo", LastName:string ="User"):string{
    return `${firstName} ${LastName}`
}

const riqui = fullName('Riqi','Jies')
const nameless = DefaulName();
console.log(riqui)
console.log(nameless)
