//Evita que sobreescrivamos variables


//1 - GOBLAL SCOPE == Window
//variable global

var mensage = "Hello, Word"; //Variable declarado Globalmente

//2- FUNCTION SCOPE

//  function printNumeros(){
//      for(var i=0;i<10;i++){
//          setTimeout(function(){
//              console.log(i)
//          },100)
//      }
//  } El LOP termina antes del seTimeout
function printNumeros(){
      var i //Asignar Let para tener un alcance interno de la funcion NO GLOBAL
      for(var i=0;i<10;i++){
            function eventuallyPrintNumber(n){
                setTimeout(function(){
                    console.log(n)
                },100)
          }
         eventuallyPrintNumber(i)
      }
}

//3 - Block SCOPE
//LET BlocksCode
function printNumeros2(){
    //Asignar Let para tener un alcance interno de la funcion BlocksCode
    for(let i=0;i<10;i++){            
        setTimeout(function(){
            console.log(i)
        },100)
    }
}

//4 - MODULE SCOPE
//se limita al achivo el uso de las variables
//solo tendre alcance internamente de las variables solo desde el archivo

//Module Scope limita el alcance

//Module Example:
//example: <script type="module" src="assets/index.js"></script>

//example: export default MediaPlayer
//example: import MediaPlayer from "./MediaPlayer.js"



printNumeros()
printNumeros2()
