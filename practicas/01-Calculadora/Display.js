// VENTANA

class Display {
  constructor(displayValAnt, displayValAct) {
    this.displayValAct = displayValAct;
    this.displayValAnt = displayValAnt;
    this.calculador = new Calculadora();
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperador = undefined;
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "*",
      dividir: "/",
      residuo: "%",
      raizcuad: "√", 
      elevado: "^"
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperador = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
    this.tipoOperador !== "igual" && this.calcular();
    this.tipoOperador = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;

    if (this.valorActual.length > 12 || this.valorAnterior.length > 12) {
      return (this.valorActual = "");

    }
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValAct.textContent = this.valorActual;
    this.displayValAnt.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperador] || ""}`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;

    this.valorActual = this.calculador[this.tipoOperador](
      valorAnterior,
      valorActual
    );
  }
}
