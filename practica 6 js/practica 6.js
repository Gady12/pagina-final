var a;
var b;
var c;


a = parseInt(prompt("ingrese el primer lado"));
b = parseInt(prompt("ingrese el segundo lado"));
c = parseInt(prompt("ingrese el tercer lado"));

if(a==b&&b==c){
    alert("trianguno equilatero")
}

if(a>b && b<c){
    alert("triangulo escaleno ")
}

if(a==b ||a==c || b>c ){
    alert("triangulo isosceles")
}