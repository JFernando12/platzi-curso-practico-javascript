function calculaAlturaTrianguloIsosceles(lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 != lado3){
        alert("Es un triangulo isosceles");
    }
    else if(lado1 == lado3 && lado1 != lado2){
        alert("Es un triangulo isosceles");
    }
    else if(lado2 == lado3 && lado1 != lado2){
        alert("Es un triangulo isosceles");
    }
    else{
        alert("No es un triangulo isosceles");
    }
}