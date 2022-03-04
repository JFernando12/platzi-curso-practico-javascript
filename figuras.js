// Cuadrado

//console.group("Cuadrado");

//const ladoCuadrado = 5;
//const perimetroCuadrado = ladoCuadrado * 4;
//const areaCuadrado = ladoCuadrado ** 2;

//console.log("El lado del cuadrado es: " + ladoCuadrado);
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado);
//console.log("El area del cuadrado es: " + areaCuadrado);

//console.groupEnd();

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado ** 2;
}

// Triangulo

//console.group("Triangulo");

//const baseTriangulo = 4;
//const ladoTriangulo1 = 5;
//const ladoTriangulo2 = 6;

//const alturaTriangulo = 5;

//const perimetroTriangulo = baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

//console.log("La base del triangulo es: " + baseTriangulo);
//console.log("El lado 1 del triangulo es: " + ladoTriangulo1);
//console.log("El lado 2 del tringulo es: " + ladoTriangulo2);
//console.log("La altura del triangulo es: " + alturaTriangulo);

//console.log("El perimetro del triangulo es: " + perimetroTriangulo);
//console.log("El area del triangulo es: " + areaTriangulo);

//console.groupEnd();

function perimetroTriangulo(base, lado1, lado2){
    return base + lado1 + lado2;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

// Circulo

//console.group("Circulo");

//const radioCirculo = 4;
//const Pi = Math.PI;

//const perimetroCirculo = Pi * (radioCirculo * 2);
//const areaCirculo = Pi * (radioCirculo ** 2);

//console.log("El radio del circulo es: " + radioCirculo);
//console.log("El perimetro del circulo es: " + perimetroCirculo);
//console.log("El area del circulo es: " + areaCirculo);

//console.groupEnd();

function perimetroCirculo(radio){
    return radio * (Math.PI);
}

function areaCirculo(radio){
    return (radio ** 2) * Math.PI;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = value * 4;
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = value ** 2;
    alert(area);
}

