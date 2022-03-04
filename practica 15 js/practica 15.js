var empleados = 0;
var sueldo = 0;
var v = 0;
var v2 = 0;
var a = 0;

var d = prompt("Ingrese el numero de empleados: ");
empleados = parseInt(d);

for (c = 1; c <= empleados; c++) {
    let d2 = prompt("Ingresar el sueldo del empleado: ");
    sueldo = parseFloat(d2);

    if(sueldo >= 1000 && sueldo <= 3000){
        v = v + 1;
    }else if(sueldo > 3000){
        v2 = v2 + 1;
    }
    a = a + sueldo;
}

console.log(`los empleados que cobran entre $1000 y $3000 son: ${v}`);
console.log(`los empleados que cobran mas de 3000 son: ${v2}`);
console.log(`El importe total fue de: ${a}`);