const displayValAnt = document.getElementById("valorArriba");
const displayValAct = document.getElementById("valorAbajo");

const botonNumeros = document.querySelectorAll(".numero");
const botonOperador = document.querySelectorAll(".operador");



const display = new Display(displayValAnt, displayValAct);

// interaccion
botonNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonOperador.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
