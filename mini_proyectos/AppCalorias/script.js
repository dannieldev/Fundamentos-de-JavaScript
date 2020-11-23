const comida1 = document.getElementById('comida-1');//obtener todas los camidas del DOM
const comida2 = document.getElementById('comida-2');
const comida3 = document.getElementById('comida-3');
const comida4 = document.getElementById('comida-4');

const tema = document.getElementById('tema'); 
const icon = document.getElementById('icon-tema');
const body = document.getElementById('body');
const header = document.getElementById('header');
const calorias = document.getElementById('calorias');

let state_theme = false; //Estados para validar
let state_one = false;
let state_two = false;
let state_three = false;
let state_four = false;

let totalcolorias = 0; //variable para sumar el numero de calorias 
calorias.innerText = totalcolorias; //Modificar el DOM

tema.addEventListener('click', function () { //
  state_theme = !state_theme; //estado cambia si se da click de false a true
  if (state_theme) { //valida el estado 
    icon.src = "img/lith.png";
    body.classList.toggle('body_dark');
    header.classList.toggle('header_dark');
  } else {
    icon.src = "img/dark.png";
    body.classList.toggle('body_dark');
    header.classList.toggle('header_dark');
  }
});
comida1.addEventListener('click', function () {//Si se da click lo secciona la comida y suma las calorias
  state_one = !state_one;
  cambiartema (state_theme,comida1);
  calorias.innerText = SumaCalorias (295,state_one);
});
comida2.addEventListener('click', function () {
  state_two = !state_two;
  cambiartema (state_theme,comida2);
  calorias.innerText = SumaCalorias (41,state_two);
});
comida3.addEventListener('click', function () {
  state_three = !state_three;
  cambiartema (state_theme,comida3);
  calorias.innerText = SumaCalorias (83,state_three);
});
comida4.addEventListener('click', function () {
  state_four = !state_four;
  cambiartema (state_theme,comida4);
  calorias.innerText = SumaCalorias (266,state_four);
});

function SumaCalorias (num, state){ //funcion para sumar por cada comida
  if (state) {
      totalcolorias = totalcolorias + num;
    } else {
      totalcolorias = totalcolorias - num;
  }
  return totalcolorias;
}
function cambiartema (estado, comida){ // funcion para cambiar el tema de cada items
  if (estado) {
    comida.classList.toggle('hover_dark');
  } else {
    comida.classList.toggle('hover');
  }
}
