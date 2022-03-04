var año;
var actual;
var edad;

año = parseInt(prompt("ingrese el año de nacimiento"));
actual = parseInt(prompt("ingrese el año en curso"));

edad = año - actual;
alert("tu edad es " + edad.toString());