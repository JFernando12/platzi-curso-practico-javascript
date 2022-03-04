function calcularDescuento(){
    var precioOriginal = document.getElementById("precioOriginal").value;
    var descuento = document.getElementById("descuento").value;
    var resultado = document.getElementById("resultado");
    var precioRebajado = precioOriginal * ((100 - descuento)/100);

    precioFinal = calcularCupon(precioRebajado);

    resultado.innerHTML = 
    "El precio Original es: " + precioOriginal + "<br>" +
    "El precio con descuento es: " + precioRebajado + "<br>" +
    "El precio con descuento + cupon de descuento es: " + precioFinal;
}

function calcularCupon(precioOriginal){
    var descuento = document.getElementById("cupon").value;
    var precioRebajado = precioOriginal * ((100 - descuento)/100);
    return precioRebajado
}