var dato, pespPaquete;
var dato2, claveZona;
var costoGramo;
var resultado;

dato = prompt(" EL PESO DEL PAQUETE");
pesoPaquete = parseFloat(dato);

if(pesoPaquete >= 5){
    alert("EL PAQUETE NO CUMPLE CON LAS NORMAS")
}else{
    dato2 = prompt(" LA CLAVE DE LA ZONA");
    claveZona = parseInt(dato2);

    switch(claveZona){
        case 1:
            costoGramo = (pesoPaquete * 1000) * 11.00;
            console.log(`El costo del envio es de: ${costoGramo}`);
        break;

        case 2:
            costoGramo = (pesoPaquete * 1000) * 10.00;
            console.log(`El costo del envio es de: ${costoGramo}`);
        break;

        case 3:
            costoGramo = (pesoPaquete * 1000) * 12.00;
            console.log(`El costo del envio es de: ${costoGramo}`);
        break;

        case 4:
            costoGramo = (pesoPaquete * 1000) * 24.00;
            console.log(`El costo del envio es de: ${costoGramo}`);
        break;

        case 5:
            costoGramo = (pesoPaquete * 1000) * 27.00;
            console.log(`El costo del envio es de: ${costoGramo}`);
        break;
    }
}