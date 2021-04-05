let Getnombre = document.getElementById("nombre");
// obj = {
//     "Categoria":[
//         "Comidas Tipicas","Lugares Turisticos","Geografia"
//     ],
//     "Comidas Tipicas": [{
//         "1": [{
//         "Pregunta" :"¿Si nunca la has comido no eres salvadoreño?",
//         "Opcciones":[{
//          "1": "Pollo",
//          "Respuesta": false
//         },{
//          "2": "Flor de Izote",
//          "Respuesta": false
//         },{
//          "3": "Papas Fritas",
//          "Respuesta": false
//         },{
//          "4": "Pupusas",
//          "Respuesta": true
//         }]
//      }]
// }]
// };

Getnombre.addEventListener('change', guardar_jugador);

// Getnombre.addEventListener('change', (event) => {
//     console.log(Getnombre.value)
//     //const resultado = document.querySelector('.resultado');
//     //resultado.textContent = `Te gusta el sabor ${event.target.value}`;
// });

// console.log(campo)
// Getnombre.addEventListener('change',guardar_jugador);

// function obtner_jugador(){
//     if(localStorage.getItem("jugador")){
//         //let 1jugador = localStorage.getItems("jugador");
//         let jugador = JSON.parse(localStorage.getItem("jugador"))
//     }else{
//         console.log("Aun no inicias la partidad")
//     }
    
//     console.log(nombre);
// }



function guardar_jugador(){
    let name = obtenerNombre()
    let jugador ={
        nombre: name,
        puntaje:""    
    }
    // //localStorage.setItem("jugador",jugador);
    localStorage.setItem("jugador",JSON.stringify(jugador));
}

function obtenerNombre(){  //Input de los datos
    nombre = Getnombre.value; //obtener numero de la targeta  
    return nombre; // retornar valor
}