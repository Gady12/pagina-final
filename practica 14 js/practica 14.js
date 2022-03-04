var dato; 
var calf;
var f = 0, x = 0, a = 0, promedio = 0;

for(c = 1; c <= 10; c++){
    dato = prompt(`Introduzca la Nota Numero${c}`);
    calf = parseInt(dato);
    console.log(f);
    if(calf >= 8){
        f=f+1;
    } if(calf < 8){
        x = x + 1;
    }
    a = a + calf;
}

promedio = a / 10;
console.log(`El promedio general fue de ${promedio}`);
console.log(`Numero de alumnos con notas mayores o iguales a 8 ${f}`);
console.log(`Numero de alumnos con notas menores a 8 ${x}`);
