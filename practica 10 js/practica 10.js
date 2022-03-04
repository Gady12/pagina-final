var a=0;
var b=0;
var r=0;
var r2=0;
a = parseInt(prompt("ingrese el primer dato "));
b = parseInt(prompt("ingrese el degundo dato"));

if(a>b){
    r= a+b;
    alert("resultado de la suma"+r.toString());
    r= a-b;
    alert("resultado de la resta"+r.toString());
}
else{
    r2= a*b;
    alert("resultado de la multiplicacion"+r2.toString());
    r2= a/b;
    alert("resultado de la division"+r2.toString());
}