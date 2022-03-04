var d;
var n;
var resultado;
var precio_Final;
d = prompt("Introduzca el precio de la prenda");
n = parseFloat(d);

if(n > 2500){
    resultado = (n * 0.15);
    console.log(`Descuento del 15%: ${resultado}`);
    precio_Final = (n - resultado);
    console.log(`El precio Final es de: ${precio_Final}`);

}else{
    resultado = (n * 0.08);
    console.log(`Descuento del 8%: ${resultado}`);
    precio_Final = (n - resultado);
    console.log(`El precio Final es de: ${precio_Final}`);
}