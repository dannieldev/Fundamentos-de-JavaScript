var boton = document.getElementById("mostrarOcultarBoton");
var elementos = document.querySelectorAll(".mostrar");
var mostrando = false;

boton.addEventListener("click", function (event) {
    event.preventDefault();

    if (mostrando) {
        elementos.forEach(function (elemento) {
            elemento.style.display = "none";
        });
        boton.textContent = "Más";

    } else {
        elementos.forEach(function (elemento) {
            elemento.style.display = "block";
        });
        boton.textContent = "Menos";
    }
    mostrando = !mostrando;
});



