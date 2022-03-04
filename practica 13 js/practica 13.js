var a;
var b;

b=parseInt(prompt("Numero de piezas"));
a=parseFloat(b);

for(c = 1; c <= a; c++){
    var b2;
    var medidas;
    b2=parseInt(prompt("cual es tamaño "));
    medidas= parseFloat(b2);

    if(medidas >= 1.20 && medidas <= 1.30){
        
        contgood= 0;
        contgood ++;
    }

}
alert(`la cantidad de piezas aptas fueron: ${contgood}`);

