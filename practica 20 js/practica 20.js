var dato, n;
alert("El precio por persona es de $95");
alert("De 200 a 300 personas el costo es de $85");
alert("Para mas de 300 personas el costo es de $75");

dato = prompt("Introduzca el numero de personas que asistirar a su evento");
n = parseInt(dato);

if(n > 200 && n <=300){
    var resultado =  n * 85;
    console.log(`El presupuesto es de: ${resultado}`);
}else if(n > 300){
    let resultado = n * 75;
    console.log(`El presupuesto es de: ${resultado}`);
}else if(n <=200){
    let resultado = n * 95;
    console.log(`El presupuesto es de: ${resultado}`);
}