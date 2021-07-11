const form = document.getElementById("form");
const ItemsTitle = document.getElementById("ItemsTitle"); // Titulo y preguntas
const ItemsOne = document.getElementById("ItemsOne"); 
const ItemsTwo = document.getElementById("ItemsTwo");
const ItemsThree = document.getElementById("ItemsThree");
const GetPuntos = document.getElementById("score");

let categoria = null;  //Guardar cual categoria se selecciono 
let i=0; //  Contador
let j=0; //Contador  para ubicar en que categorias estas
let check=0; //Para ubicar en que itemas se le da click
let trivia = { // Preguntas
    "categoria":["Comidas Tipicas","Lugares Turisticos","Geografia"],
    "tipicas": {
        0: {
            "pregunta" :"¿Si nunca las has comido no eres salvadoreño?",
            "opcciones":["Flor de Izote","Papas Fritas","Pupusas"],
            "validar":2
        },
        1: {
            "pregunta" :"¿Es atol y no se baña?",
            "opcciones":["Atol de Maíz","Atol Chuco", "Atol de Piñuela"],
            "validar": 1
        },
        2: {
            "pregunta" :"¿Es de maíz y está mal de la cabeza?",
            "opcciones":[ "Elote loco", "Palomitas de maiz","Tamales de elote"],
            "validar": 0
        }
    },"lugares":{
        0: {
            "pregunta" :"Una playa donde practican surf y tiene una roca",
            "opcciones":["Playa El tunco","Playa el Sonte","Costa del Sol"],
            "validar":0
        },
        1: {
            "pregunta" :"Lugar más alto de El Salvador",
            "opcciones":["Cerro Verde","Pital", "La puerta del Diablo"],
            "validar": 1
        },
        2: {
            "pregunta" :"Lugar arqueologico de El Salvador",
            "opcciones":[ "EL puerto", "Parque Cuscatlan","Joya de Ceren"],
            "validar": 2
        }
    },"geografia":{
        0: {
            "pregunta" :"Cuantos departamentos tiene El Salvador",
            "opcciones":["12","14","10"],
            "validar":1
        },
        1: {
            "pregunta" :"Departamento de El Salvador con Zona Costera",
            "opcciones":["La Libertad","Santa Ana", "Morazán"],
            "validar": 0
        },
        2: {
            "pregunta" :"¿El Salvador es parte de?",
            "opcciones":[ "America del Sur", "Europa","Centroamerica"],
            "validar": 2
        }
    }

};
//Veficar en cual categoria se realizó el click
ItemsOne.addEventListener("click", (a) => {
    check = 0;
    if(categoria == null){
        categoria = 1;
    }
    score(categoria,i,check);
    WCategory(categoria,i,check);
    i++;
});
ItemsTwo.addEventListener("click", (b) => {
    check = 1;
    if(categoria == null){
        categoria = 2;
    }
    score(categoria,i,check);
    WCategory(categoria,i,check);
    i++;
});
ItemsThree.addEventListener("click", (c) => {
    check = 2;
    if(categoria == null){
        categoria = 3;
    }
    score(categoria,i,check);
    WCategory(categoria,i,check);
    i++;
});
//Mostar Opciones en el DOM
function WCategory (categoria,i){
    setTimeout(function() {
    if(categoria == 1 & i <=2){
        console.log("cate 1");
            ItemsTitle.innerHTML =`${trivia.tipicas[i].pregunta}`;
            ItemsOne.innerHTML =`${trivia.tipicas[i].opcciones[0]}`;
            ItemsTwo.innerHTML =`${trivia.tipicas[i].opcciones[1]}`;
            ItemsThree.innerHTML =`${trivia.tipicas[i].opcciones[2]}`;
            console.log(i);
            ItemsOne.style.background = "";
            ItemsTwo.style.background = "";
            ItemsThree.style.background = "";
        
    }else if (categoria == 2 & i <=2){
        console.log("cate 2");
            ItemsTitle.innerHTML =`${trivia.lugares[i].pregunta}`;
            ItemsOne.innerHTML =`${trivia.lugares[i].opcciones[0]}`;
            ItemsTwo.innerHTML =`${trivia.lugares[i].opcciones[1]}`;
            ItemsThree.innerHTML =`${trivia.lugares[i].opcciones[2]}`;
            console.log(i);
            ItemsOne.style.background = "";
            ItemsTwo.style.background = "";
            ItemsThree.style.background = "";
    }else if (categoria == 3 & i <=2){
        console.log("cate 2");
            ItemsTitle.innerHTML =`${trivia.geografia[i].pregunta}`;
            ItemsOne.innerHTML =`${trivia.geografia[i].opcciones[0]}`;
            ItemsTwo.innerHTML =`${trivia.geografia[i].opcciones[1]}`;
            ItemsThree.innerHTML =`${trivia.geografia[i].opcciones[2]}`;
            console.log(i);
            ItemsOne.style.background = "";
            ItemsTwo.style.background = "";
            ItemsThree.style.background = "";
    }else{
        location.href="fin.html";
    }
    }, 1000); // Fin del SetTimeout
}
//Verificar recpuestas correctas e incorrectas 
function score(categoria,i,check){
    if(i > 0 & j <= 2){
        if(categoria == 1 & trivia.tipicas[j].validar == check){
            Correcto(check);

        }else if (categoria == 2 & trivia.lugares[j].validar == check){ 
            console.log("lugar");
            Correcto(check);
        }else if (categoria == 3 & trivia.geografia[j].validar == check){ 
            console.log("geogra");
            Correcto(check);
        }else{
            inCorrecto(check);
        }
        j++;
    } 
}

//Cambiar color en el DOM
function Correcto(check){
    if(check==0){
        ItemsOne.style.background = "green";
        Setpuntaje(33);
    }
    if(check==1){
        ItemsTwo.style.background = "green";
        Setpuntaje(33);
    }
    if(check==2){
        ItemsThree.style.background = "green";
        Setpuntaje(34);
    }
}
function inCorrecto(check){
    if(check==0){
        ItemsOne.style.background= "red";
    }
    if(check==1){
        ItemsTwo.style.background= "red";
    }
    if(check==2){
        ItemsThree.style.background= "red";
    }
}
// Obtener puntaje y almacenarlo
function Setpuntaje(score){
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.puntaje = jugador.puntaje + score;
    GetPuntos.innerHTML = jugador.puntaje;
    localStorage.setItem("jugador", JSON.stringify(jugador));
}