var cal;
var total = 0;
var final = 0;

for(c=1; c<=6; c++){
    console.log(` Materia ${c} `)
    for(i = 1; i <= 3; i++){
        dato = prompt(`Parcial ${i}`);
        cal = parseInt(dato);
        total = total + cal;
    }
    var resultado = total / 3;
    total = 0;
    console.log(`El promedio de la materia es de: ${resultado}`);
    final = final + resultado;
    resultado = 0;

}
var resultado2 = final /6;
if(resultado2>=8){
    alert("calificaion aprovatoria ");
}
else{
     alert("calificacion no aprovatoria ")
}