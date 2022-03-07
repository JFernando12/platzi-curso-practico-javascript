var lista = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 3, 2, 4, 4, 4];

var contadorLista = {};

lista.map(function(elemento){
    if (contadorLista[elemento]){
        contadorLista[elemento] += 1;
    }
    else {
        contadorLista[elemento] = 1;
    }
})

console.log(contadorLista);

var arrayLista = Object.entries(contadorLista);

console.log(arrayLista);

var ordenaLista = arrayLista.sort((a, b) => a[1] - b[1]);

var moda = ordenaLista.pop()[0];

console.log(moda)

var resultado = document.getElementById("resultado");
var array = document.getElementById("array");

array.innerHTML = "La lista es: " + lista;
resultado.innerHTML = "La moda es: " + moda; 