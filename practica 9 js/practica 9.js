var sueldo=0;
var pago=0;

pago =  parseInt(prompt("ingrese el sueldo"));

sueldo = (pago * 8)*6;

if(sueldo>2000){
    alert("debe pagar impuesto "+ sueldo.toString());
}
else{
    alert("no paga impuesto"+ sueldo.toString());
}