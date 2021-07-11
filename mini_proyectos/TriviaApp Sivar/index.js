let Getnombre = document.getElementById("nombre");

Getnombre.addEventListener('change', guardar_jugador);

function guardar_jugador(){
    let name = obtenerNombre()
    let jugador ={
        nombre: name,
        puntaje:0    
    }
    // //localStorage.setItem("jugador",jugador);
    localStorage.setItem("jugador",JSON.stringify(jugador));
    // localStorage.setItem("preguntas",JSON.stringify(preguntas));
}
function obtenerNombre(){  //Input de los datos
    nombre = Getnombre.value; //obtener numero de la targeta  
    return nombre; // retornar valor
}