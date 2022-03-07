const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

function extraerOrdenarSalarios(lista){
    lista = colombia.map(i => i.salary);
    listaOrdenada = lista.sort((a, b) => a - b);
    return listaOrdenada;
}

// Calcular Promedio

function calcularPromedio(lista){
    var lista = extraerOrdenarSalarios(lista);
    listaSuma = lista.reduce((a,b) => a + b);
    var promedio = listaSuma / lista.length;

    console.log(lista);
    console.log(promedio);
}


//Es par o no es par
function esPar(lista){
    return lista % 2 == 0;
}

//Calcular Mediana
function calcularMediana(lista){
    lista = extraerOrdenarSalarios(lista);

    if (esPar(lista)){
        mitad1 = lista[(lista.length / 2) - 1];
        mitad2 = lista[lista.length / 2];
        mediana = (mitad1 + mitad2) / 2;
    }
    else{
        mediana = lista[lista.length / 2];
    }

    console.log(mediana);
}

//Calcular Moda

function calcularModa(lista){
    var cantidad = {};

    var lista = extraerOrdenarSalarios(lista);

    lista.map(function(i){
        if (cantidad[i]){
            cantidad[i] += 1;
        }
        else {
            cantidad[i] = 1;
        }
    })
    
    cantidad = Object.entries(cantidad);
    cantidadOrdenada = cantidad.sort((a, b) => a[1] - b[1]);

    moda = cantidadOrdenada[(cantidadOrdenada.length) - 1][0];

    console.log(moda)
}

calcularPromedio(colombia)
calcularMediana(colombia)
calcularModa(colombia)
