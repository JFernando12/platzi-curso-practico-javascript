function calculaAlturaTrianguloIsosceles(){
    var Isosceles = 1;

    var altura;

    var lado1 = document.getElementById("lado1");
    lado1 = lado1.value;

    var lado2 = document.getElementById("lado2");
    lado2 = lado2.value;

    var lado3 = document.getElementById("lado3");
    lado3 = lado3.value;

    var resultado = document.getElementById("resultado");

    if (lado1 == lado2 && lado1 != lado3){
        altura = Math.sqrt((lado2 ** 2) - ((lado3 / 2) ** 2));
    }
    else if(lado1 == lado3 && lado1 != lado2){
        altura = Math.sqrt((lado1 ** 2) - ((lado2 / 2) ** 2));    }
    else if(lado2 == lado3 && lado1 != lado2){
        altura = Math.sqrt((lado2 ** 2) - ((lado1 / 2) ** 2));
    }
    else{
        altura = "No es un triangulo Isosceles"
        Isosceles = 0;
    }

    if (Isosceles){
        resultado.innerText = "La altura es: " + altura;
    }
    else{
        resultado.innerText = "No es un tringulo Isosceles, quiero trabajo jeje"
    }
    

}
