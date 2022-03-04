var a = 0;
var b = 0;
var valor = 0;

for(c=0; c<=10; c++){
  
    b=prompt(`Introducir el Valor ${c}`);
    a=parseInt(b);
    valor= valor + b;
}
var resultado = valor /10;
console.log(`La suma de los valores es de: ${valor}`);
console.log(`El promedio de los valores es de: ${resultado}`);