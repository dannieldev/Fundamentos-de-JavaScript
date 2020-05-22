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
let Object:object = {type:"asfd"};