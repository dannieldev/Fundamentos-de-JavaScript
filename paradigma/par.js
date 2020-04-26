//Codigo Fontend
function ParImprarFronted(){
    let numero = prompt('ingresa numero');
    modulo = numero %2;
    par = `El numero ${numero} es par`;
    impar = `El numero ${numero} es impar`;
    //Operador Ternario
    //varible = (concion) ? verdadero : false
    
    console.log((modulo === 0) ? par : impar ) ; 
}

ParImprarFronted();

//Codigo Backend
function ParImprarBackend(){
    process.stdout.white('Ingrese un numero');

    process.stdin.once('data',numero => {
        let modulo = numero % 2;
        par = `El numero ${numero} es Par`;
        impar = `El numero ${numero} es Impar`;
        residuo = (modulo === 1) ? par : impar;

        process.stdout.white(residuo);
        process.exit;
    })
}