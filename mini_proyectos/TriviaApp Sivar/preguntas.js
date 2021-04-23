let nombre = document.getElementById("nombre");
const formpreguntas = document.getElementById("form");
const fromContainer = document.getElementById("form");
const ItemsTitle = document.getElementById("ItemsTitle");
const ItemsOne = document.getElementById("ItemsOne");
const ItemsTwo = document.getElementById("ItemsTwo");
const ItemsThree = document.getElementById("ItemsThree"); 
const GetPuntos = document.getElementById("puntos");
let categoria = null;
let trivia = {
    "categoria":["Comidas Tipicas","Lugares Turisticos","Geografia"],
    "tipicas": [{
        "preguntas": [{
            "pregunta" :"¿Si nunca la has comido no eres salvadoreño?",
            "opcciones":[{
            "respuesta": "Flor de Izote",
            "validar": false
            },{
            "respuesta": "Papas Fritas",
            "validar": false
            },{
            "respuesta": "Pupusas",
            "validar": true
            }]
        }],
        "preguntas1": [{
            "pregunta" :"¿Es atol y no se baña?",
            "opcciones":[{
            "respuesta": "Ato de Maiz",
            "validar": false
            },{
            "respuesta": "Atol Chuco",
            "validar": true
            },{
            "respuesta": "Atol de Piñuela",
            "validar": false
            }]
        }],
        "preguntas2": [{
            "pregunta" :"¿Es de maiz y esta mal de la cabezá?",
            "opcciones":[{
            "respuesta": "Elote loco",
            "validar": false
            },{
            "respuesta": "Palomitas de maiz",
            "validar": false
            },{
            "respuesta": "Tamales de elote",
            "validar": true
            }]
        }]
    }],
    "lugares": [{
        "preguntas": [{
            "pregunta" :"Una playa con una gran piedra",
            "opcciones":[{
            "respuesta": "Playa El tunco",
            "validar": false
            },{
            "respuesta": "Playa el Sonte",
            "validar": false
            },{
            "respuesta": "Costa del Sol",
            "validar": true
            }]
        }],
        "preguntas1": [{
            "pregunta" :"fLugar más alto del pais",
            "opcciones":[{
            "respuesta": "Pital",
            "validar": true
            },{
            "respuesta": "Cerro Verde",
            "validar": false
            },{
            "respuesta": "La puerta del Diablo",
            "validar": false
            }]
        }],
        "preguntas2": [{
            "pregunta" :"sLugar arqueologico",
            "opcciones":[{
            "respuesta": "EL puerto",
            "validar": true
            },{
            "respuesta": "Parque Cuscatlan",
            "validar": false
            },{
            "respuesta": "Joya de Ceren",
            "validar": false
            }]
        }]
   }],
   "geografia": [{
    "preguntas": [{
        "pregunta" :"Una playa con una gran piedra",
        "opcciones":[{
        "respuesta": "Costa del Sol",
        "validar": false
        },{
        "respuesta": "Playa El tunco",
        "validar": true
        },{
        "respuesta": "Playa el Sonte",
        "validar": false
        }]
    }],
    "preguntas1": [{
        "pregunta" :"El lugar más alto del país",
        "opcciones":[{
        "respuesta": "EL pital",
        "validar": true
        },{
        "respuesta": "El Boqueron",
        "validar": false
        },{
        "respuesta": "La Puerta del Diablo",
        "validar": false
        }]
    }],
    "preguntas2": [{
        "pregunta" :"Lugar arqueologico",
        "opcciones":[{
        "respuesta": "Joya de Ceren",
        "validar": true
        },{
        "respuesta": "Parque Cuscatlan",
        "validar": false
        },{
        "respuesta": "EL puerto",
        "validar": false
        }]
    }]
}]
};

/*Funcion Cargar y Mostrar datos*/
document.addEventListener ('DOMContentLoaded', function () { 
    let memoryName =  JSON.parse(localStorage.getItem("jugador"));
    // let memoryPreguntas =  JSON.parse(localStorage.getItem("preguntas"));
    nombre.innerHTML = memoryName.nombre;
    
    // fromContainer.innerHTML +=`
    // <label>Categorias de Trivia</label>
    // <input id="categoriaUno" type="submit" value="${preguntas.Categoria[0]}">
    // <input type="submit" value="${preguntas.Categoria[1]}">
    // <input type="submit" value="${preguntas.Categoria[2]}">
    // `;
});
console.log(fromContainer);
let i=0;
ItemsOne.addEventListener("click", (a) => {
    if(categoria == null){
        categoria = 1;
    }
    Cualcategoria(categoria,i);
    puntage(categoria,i,1);
    i++;
});
ItemsTwo.addEventListener("click", (b) => {
    if(categoria == null){
        categoria = 2;
    }
    Cualcategoria(categoria,i);
    puntage(categoria,i,2);
    i++;
});

ItemsThree.addEventListener("click", (c) => {
    if(categoria == null){
        categoria = 3;
    }    
    Cualcategoria(categoria,i);
    puntage(categoria,i,3);
    i++
});
function Cualcategoria (categoria,i){
    console.log(i);
    if(categoria == 1 ){
        console.log("categoria 1");
        switch(i){
            case 0: 
                console.log("pupusas")
                ItemsTitle.innerHTML =`${trivia.tipicas[0].preguntas[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.tipicas[0].preguntas[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.tipicas[0].preguntas[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.tipicas[0].preguntas[0].opcciones[2].respuesta}`;
                break
            case 1: 
                ItemsTitle.innerHTML =`${trivia.tipicas[0].preguntas1[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.tipicas[0].preguntas1[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.tipicas[0].preguntas1[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.tipicas[0].preguntas1[0].opcciones[2].respuesta}`;
                break
            case 2: 
                ItemsTitle.innerHTML =`${trivia.tipicas[0].preguntas2[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.tipicas[0].preguntas2[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.tipicas[0].preguntas2[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.tipicas[0].preguntas2[0].opcciones[2].respuesta}`;
                break
            default:
                console.log("Error")
                break
        }
    }
    if(categoria == 2 ) {
        console.log ("cate 2");
        switch(i){
            case 0: 
                console.log("Lugares")
                ItemsTitle.innerHTML =`${trivia.lugares[0].preguntas[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.lugares[0].preguntas[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.lugares[0].preguntas[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.lugares[0].preguntas[0].opcciones[2].respuesta}`;
                break
            case 1: 
                ItemsTitle.innerHTML =`${trivia.lugares[0].preguntas1[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.lugares[0].preguntas1[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.lugares[0].preguntas1[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.lugares[0].preguntas1[0].opcciones[2].respuesta}`;
                break
            case 2: 
                ItemsTitle.innerHTML =`${trivia.lugares[0].preguntas2[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.lugares[0].preguntas2[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.lugares[0].preguntas2[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.lugares[0].preguntas2[0].opcciones[2].respuesta}`;
                break
            default:
                console.log("Error")
                break
        }
    } 
    if(categoria == 3) {
        console.log ("cate 3");
        switch(i){
            case 0: 
                console.log("Lugares")
                ItemsTitle.innerHTML =`${trivia.geografia[0].preguntas[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.geografia[0].preguntas[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.geografia[0].preguntas[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.geografia[0].preguntas[0].opcciones[2].respuesta}`;
                break
            case 1: 
                ItemsTitle.innerHTML =`${trivia.geografia[0].preguntas1[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.geografia[0].preguntas1[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.geografia[0].preguntas1[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.geografia[0].preguntas1[0].opcciones[2].respuesta}`;
                break
            case 2: 
                ItemsTitle.innerHTML =`${trivia.geografia[0].preguntas2[0].pregunta}`;
                ItemsOne.innerHTML =`${trivia.geografia[0].preguntas2[0].opcciones[0].respuesta}`;
                ItemsTwo.innerHTML =`${trivia.geografia[0].preguntas2[0].opcciones[1].respuesta}`;
                ItemsThree.innerHTML =`${trivia.geografia[0].preguntas2[0].opcciones[2].respuesta}`;
                break
            default:
                console.log("Error")
                break
        }
    }
    
}

function puntage(categoria,i,opccion){
    if(categoria == 1){
        if(i==1 && opccion == 3){-
            console.log("Es Correcta")
            Setpuntage(33);
        }
        if(i==2 && opccion == 2){
            console.log("Es Correcta")
            Setpuntage(33);
        }
        if(i==3 && opccion == 1){
            console.log("Es Correcta")
            Setpuntage(34);
        }
    }
    if(categoria == 2){
        if(i==1 && opccion == 1){
            console.log("Es Correcta")
            Setpuntage(33);
        }
        if(i==2 && opccion == 1){
            console.log("Es Correcta")
            Setpuntage(33);
        }
        if(i==3 && opccion == 3){
            console.log("Es Correcta")
            Setpuntage(34);
        }
    }
    if(categoria == 3){
        if(i==1 && opccion == 2){
            console.log("Es Correcta")
            Setpuntage(33);
        }
        if(i==2 && opccion == 1){
            console.log("Es Correcta")
            Setpuntage(33);
        }
        if(i==3 && opccion == 1){
            console.log("Es Correcta")
            Setpuntage(34);
        }
    }
}

function Setpuntage(puntos){
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.puntaje = jugador.puntaje + puntos;
    GetPuntos.classList.remove('puntos')
    GetPuntos.innerHTML = jugador.puntaje;
    localStorage.setItem("jugador", JSON.stringify(jugador));
}
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