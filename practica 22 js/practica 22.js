let ingresa;
var dato;
var suma = 0;

for(c = 1; c <= 10; c++){
    dato = prompt("INGRESA EL NUMERO DE DATOS: ");
    ingresa = parseInt(dato);
    
    if(ingresa > 0){
        suma = suma + ingresa;

    }else if (ingresa < 0){
        console.log("EL NUMERO ES NEGATIVO");
    }
}