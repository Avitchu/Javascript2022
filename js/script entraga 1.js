//datos para la cuenta
alert("Bienvenide, calculemos cuanto podes gastar por producto para no pasarte de tu presupuesto");

let gasto = parseFloat(prompt("Cuanto queres gastar?"));
if (gasto <= 0) {
    alert ("Ingrese cuanto dinero quiere gastar")  
    gasto = parseFloat(prompt ("Ingrese cuanto dinero quiere gastar"));
}

let productos = prompt("Cuantos productos va a llevar?");
if (productos <= 0) {

    alert ("Ingrese cuantos productos quiere llevar")
    productos= prompt ("Ingrese cuantos productos quiere llevar");
}

//datos
let porcentajeTotal = productos;

let totalXproducto = gasto/porcentajeTotal;

alert ("Podes gastar" + " " +totalXproducto+ " "+"aprox. por producto");
