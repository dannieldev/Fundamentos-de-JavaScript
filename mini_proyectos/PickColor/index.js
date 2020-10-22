
window.addEventListener("load", inicio, false);
var boton = document.getElementById("bt");
var colorPicker = document.getElementById('pick');
var body = document.querySelector("body");


function inicio() {
    colorPicker.addEventListener("input", actualizar, false);
}

function actualizar(event) {
    boton.addEventListener('click', function () {
        body.style.background =  event.target.value;
     });
  }