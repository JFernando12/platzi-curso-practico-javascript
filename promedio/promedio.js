
numeros = [
    500,
    600,
    350,
    300,
    1000,
    800,
    1600,
    1
]

function ordenarLista(lista){
    var guardar;

    for (j = 0; j < (lista.length - 1); j ++){
        for (i = 0; i < (lista.length - 1); i++){
            if (lista[i] > lista[i+1]){
                guardar = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = guardar;
            }
        }
    }
    
    console.log(lista)

}

ordenarLista(numeros)

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

