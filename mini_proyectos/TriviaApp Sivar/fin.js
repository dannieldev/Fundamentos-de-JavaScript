let nombre = document.getElementById("nombrejuego");
let puntagefinal = document.getElementById("puntosfinal");
let reiniciar = document.getElementById("reiniciar");


let memoryName =  JSON.parse(localStorage.getItem("jugador"));
puntagefinal.innerHTML = memoryName.puntaje;
nombre.innerHTML = memoryName.nombre;

reiniciar.addEventListener("click", (b) => {
    setTimeout(function() {
        location.href="index.html";
    }, 1000);
});