function calcularDescuento(){
    var precioOriginal = document.getElementById("precioOriginal").value;
    var descuento = document.getElementById("descuento").value;

    var precioRebajado = precioOriginal * ((100 - descuento)/100);

    alert("El precio con descuento es: " + precioRebajado);
}