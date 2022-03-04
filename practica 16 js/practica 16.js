var resultado;

for (c = 1; c <=20; c++) {
    var cuadrado = Math.pow(c, 2);
    console.log(`el cuadrado del primer numero fue ${cuadrado}`);
    if(cuadrado%2==0){
        resultado = "El numero es par";
        console.log(resultado);
    }else{
        resultado = "El numero es impar";
        console.log(resultado);
    }
}