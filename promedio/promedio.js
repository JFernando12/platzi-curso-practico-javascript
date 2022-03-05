
numeros = [
    400,
    500,
    200,
    350
]

function calcularaPromedio(lista){
    var resultado = document.getElementById("resultado");
    let total = 0;

    for (i = 0; i < lista.length; i ++){
        total = total + lista[i];
        console.log(total)
    }
    promedio = total / lista.length;

    resultado.innerHTML = "El promedio es: " + promedio;
}

calcularaPromedio(numeros);
