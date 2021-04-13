let nombre = document.getElementById("nombre");
const formpreguntas = document.getElementById("form");
const fromContainer = document.getElementById("form");
const ItemsTitle = document.getElementById("ItemsTitle");
const ItemsOne = document.getElementById("ItemsOne");
const ItemsTwo = document.getElementById("ItemsTwo");
const ItemsThree = document.getElementById("ItemsThree"); 
let categoria = null;
trivia = {
    "categoria":[
        "Comidas Tipicas","Lugares Turisticos","Geografia"
    ],
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
            "respuesta": "Atol de Piñuela",
            "validar": false
            },{
            "respuesta": "Atol Chuco",
            "validar": true
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
    i++
    // ItemsTitle.innerHTML =`${trivia.tipicas[0].preguntas[0].pregunta}`;
    // ItemsOne.innerHTML =`${trivia.tipicas[0].preguntas[0].opcciones[0].respuesta}`;
    // ItemsTwo.innerHTML =`${trivia.tipicas[0].preguntas[0].opcciones[1].respuesta}`;
    // ItemsThree.innerHTML =`${trivia.tipicas[0].preguntas[0].opcciones[2].respuesta}`;
});
ItemsTwo.addEventListener("click", (b) => {
    if(categoria == null){
        categoria = 2;
    }
    Cualcategoria(categoria)
});

ItemsThree.addEventListener("click", (c) => {
    if(categoria == null){
        categoria = 3;
    }    
    Cualcategoria(categoria);
   
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
            case 'rojo': 
                console.log("Tu color favorito es el rojo");
                break
            default:
                console.log("No es un color Valido")
                break
        }
    }
    if(categoria == 2 ) {
        console.log ("cate 2");
    } 
    if(categoria == 3) {
        console.log ("cate 3");
    }
    
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