//Casos estrictos de uso de punto y coma
//Prueva quitando los punto y coma para ver el erro

// 1° CASO
console.log('Hola Soy yo');
[1,2,3].forEach(n=> console.log(n*2))

// 1° CASO
const nombre = 'Frd'
console.log('Hola mi nombre es Frd');
`${nombre} es un desarrollador`

// 1° CASO donde no deve ir punto y coma
/*
function cacularDoble(numero){
    return; //ERROR
    {
        original: numero,doble: numero*2
    }
}*/

function cacularDoble(numero){
    return{ //BIEN
        original: numero,doble: numero*2
    }
}
