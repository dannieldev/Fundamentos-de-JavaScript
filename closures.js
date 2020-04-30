//CLOSURES

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
saludoColombiano('Daniel'); //Hola Daniel amigo

/*---------------------------------------------------------*/

/// IIFE  Immediately-Invoked Function Expression
(function(){
   let = color = 'green';

    function printColor(){
        console.log(color)
    }
     printColor()
 })();

///fUNCIONES QUE REGRESAN OTRAS FUNCIONES
//El SCOPE SE LO MEMORIZO APEZAR QUE ESTA ARRIBA 
function MakeColorPrinter(color){
    let = colorMessages = `The color is ${color}`

    return function(){
        console.log(colorMessages)
    }
}

let greenColorPrinter = MakeColorPrinter('green');
let redColorPrinter = MakeColorPrinter('red');
console.log(greenColorPrinter(),redColorPrinter())

/*---------------------------------------------*/
//VARIABLES PRIVADAS
//FUNCIONES PRIVADAS
// const counter = {
//     count: 3,
// }
// console.log(counter.count) //No puedo acceder por ser privada

function MakeCount(n){
    let count = n
    return{
        increase: function(){
            count = count + 1
        },
        decrease: function(){
            count = count -1
        },
        getcount:function(){
           return count
        }
    }
}
let counter = MakeCount(7)
console.log('The count is:', counter.getcount())
counter.increase()
console.log('The count is:', counter.getcount())
counter.increase()