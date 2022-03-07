numeros = [
    5000,
    500,
    600,
    350,
    300,
    800,
    1600,
    1200
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
    
    return lista;
}

function esPar(lista){
    if(lista.length % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function calcularMediana(lista){
    resultado = document.getElementById("resultado");
    array = document.getElementById("lista");
    lista  = ordenarLista(lista);
    var mediana;
    var mitad;
    var mitad1;
    var mitad2;

    if (esPar(lista)){
        mitad1 = lista[(lista.length/2) - 1];
        mitad2 = lista[lista.length/2];
        mediana = (mitad1 + mitad2) / 2;
    }
    else{
        mitad = parseInt((lista.length/2));
        mediana = lista[mitad];
    }

    array.innerHTML = "La Lista es: " + lista;

    resultado.innerHTML = "La mediana es: " + mediana;

}

calcularMediana(numeros)