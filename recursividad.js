//CASO BASE
/* 13 /__4__
    13-4= 9     1
    9-4=5       1
    5-4=1       1
    1-4=-3
    
 */


 //Funcion RECURSIVA
function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0
    }
    //CASO RECURSIVO

    //LLama recursivamente a la misma funcion 
    return 1 + divisionEntera(dividendo - divisor, divisor) //
}

//console.log(divisionEntera(13,4))
//console.log(divisionEntera(3,2))

//Dias faltantes para Domingo
/* hoy =1 lunes 7= domingo

*/ 
function diasFaltantes (dia, otroDia){
    if(dia === otroDia){  
        return -1  //Caso base
    }
    return 1 + diasFaltantes(dia+1, otroDia)
}

console.log(diasFaltantes(2,5))