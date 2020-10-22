var Getnum = document.getElementById("numero"); //Numero de tarjeta
var ImgValida = document.getElementById('ImgValida');

var enter = document.getElementById('enter');
var Mensaje = document.getElementById('mensaje');

var uno = 1;
var Ntarjeta  = []; //Array de las lagetas 
let pares = []; //obtener array de los pares 
let impares = []; //obtener array de los impares
let suma = 0;
var valida =0;

var VentaUp = enter, 
    ventana = document.getElementById('ventana'),
    MainVentana =document.getElementById('MainVentana'),
    BtnExit = document.getElementById('btn-exit');
    BtnExit.addEventListener('click', function() {
		ventana.classList.remove('active');
        location.reload();
    });  


Getnum.addEventListener('change',luhn); //Actualizar a cualquier cambio y valida con LUHN 


function luhn() {  
    resultados = obtenerDatos(); // Resivir numero de la tarjeta 
    if(resultados.length >= 13){
        for(var i=0; i <= resultados.length-1; i++){
            var subStr = resultados.toString().substr(i, uno); //separar numero
            conte = parseInt(subStr, 10); //Comberti a entero 
            count = Ntarjeta.push(conte); //Agregar a un array los digitos separados
        }
    const reversed = Ntarjeta.reverse(); //Dale vuelta al array
    console.log('reversed:', reversed);
    for(var i=0; i<= resultados.length-1; i++){ //For para realizar suma 
        var index = reversed[i]; //Variable para almacenar temporalmente cada dato con su indice 
        if((i % 2) != 0) { // Validar si el indice del numero es paro o inpar 
           datomulti = index * 2;  //A cada numero par se multiplica por 2
           if(datomulti > 9){ //Si es mayor a 9 el resultado de la multiplicacion 
                suma += sumaDigitos(datomulti) //Funcion para sumar sus digitos 
           }else{
                suma += datomulti //Sumar resultado 
           }
        }else{
            suma += index; // Si es impar solo realizar la suma 
        }
    }
  }
  console.log("suma", suma);
  if(suma % 2 == 0) { //Validar el residuo de la suma
      console.log("EXITO"); //Tarjeta valida 
      valida = 1;
  }else{
      console.log("Casi"); //Tarjeta invalida 
      valida =0;
  }
}

function sumaDigitos(num) { //Funcion para Suma los Digitos del mismo numero
    if(0<num) {
        return (num%10) + sumaDigitos(Math.floor(num/10)); 
    }
      return num; 
}

function obtenerDatos(){  //Input de los datos
    numero = Getnum.value; //obtener numero de la targeta  
    return numero; // retornar valor
}

function limites(limitField, limitNum) { //Poner limites al ingresar numeros 
       if (limitField.value.length > limitNum) {
           limitField.value = limitField.value.substring(0, limitNum); //Asignar limite
       }
       if(Getnum.value.length < 13 ){ //Validar minimo de digitos ingresados
        Getnum.className = 'error'; 
       }else{
        Getnum.className = 'ok';
        enter.disabled = false;
       }
}

function validacion(){ //Mensajes al usario al validar tajeta
    ventana.classList.add('active')
    Mensaje.innerText = "Validando"; 
    setTimeout(function(){ 
        if(valida==1){ //Verificar tarjeta 
            Mensaje.innerText = "Validación exitosa"; //Mensaje
            ImgValida.src = "img/confirm.png"; //Icono
        }else{
            Mensaje.innerText = "Tajeta no valida";
            ImgValida.src = "img/block.png";
            }
        }, 3000);

     console.log("validando..")
}