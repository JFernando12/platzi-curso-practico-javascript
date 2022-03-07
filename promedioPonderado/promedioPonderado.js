class materia{
    constructor(materia, credito, nota){
        this.materia = materia;
        this.credito = credito;
        this.nota = nota;
    }
}

lista = [new materia("matematicas",2, 8), new materia("español", 1, 9), new materia("fisica", 4, 10)];

console.log(lista)
var parteArriba = 0;
var parteAbajo = 0;

for (i in lista){
    parteArriba += lista[i].credito * lista[i].nota;
    parteAbajo += lista[i].credito;
}

promedioPonderado = parteArriba / parteAbajo;

console.log(parteArriba, parteAbajo, promedioPonderado)