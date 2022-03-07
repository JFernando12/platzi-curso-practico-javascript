class materia{
    constructor(materia, credito, nota){
        this.materia = materia;
        this.credito = credito;
        this.nota = nota;
    }
}

lista = [new materia("matematicas",5, 8), new materia("español", 1, 9), new materia("fisica", 1, 10)];

console.log(lista)

var parteArriba = lista.map(materia => materia.nota * materia.credito);
parteArriba = parteArriba.reduce((valor, newValor) => valor + newValor)

var parteAbajo = lista.map((materia) => materia.credito);
parteAbajo = parteAbajo.reduce((valor, newValor) => valor + newValor);

var promedioPonderado = parteArriba / parteAbajo;
var resultado = document.getElementById("resultado");

resultado.innerHTML = "El promedio ponderado es: " + promedioPonderado;