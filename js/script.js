//datos para la cuenta

alert("Bienvenide, ingresa a la plataforma para acceder ver los descuentos, escribi Entrar");

let savedPIN = 'Entrar';
let ingresar = false;

//Login

for (let i = 2; i >= 0; i--) {
    let userPIN = prompt('Ingresa tu pin. Tenés ' + (i + 1) + ' intentos.');
    if (userPIN === savedPIN) {
        alert('Login exitoso');
        ingresar = true;
        break;
    } else {
        alert('Error. Te quedan ' + i + ' intentos.');
    }

}

//alert('fin del login');

if (ingresar) {
    //"Accedemos" a la info de la cuenta

class descuentos {
    grupoDeAliades(Aliade,tipoDeDescuento,montoDeDescuento){
        
        this.Aliade = Aliade;
        this.tipoDeDescuento = tipoDeDescuento;
        this.montoDeDescuento = montoDeDescuento;
    }
}

const gastronomia = [{Aliade: 'casabrandon', tipoDeDescuento: 'gastronomia',montoDeDescuento:'10%'}, { id: 100, Aliade: 'lo de Nelly ', tipoDeDescuento: 'gastronomia',montoDeDescuento:'20%'}];
const ropa=[{ Aliade: 'Serigrafia Urgente', tipoDeDescuento: 'ropa', montoDeDescuento:'20%'}, { id: 200, Aliade: 'Wipp', tipoDeDescuento: 'ropa', montoDeDescuento:'10%'}];
const accesorios= [{ Aliade: 'Latirolesa', tipoDeDescuento: 'accesorios',montoDeDescuento:'10%' }, { id: 300, Aliade: 'mirame las Medias', tipoDeDescuento: 'accesorios',montoDeDescuento:'15%' }];
const libros= [{ Aliade: 'Cespedes', tipoDeDescuento: 'libros',montoDeDescuento:'15%'},{ id: 400, Aliade: 'KOKORO', tipoDeDescuento: 'libros',montoDeDescuento:'10%'}];


// const descuentosClub  = [gastronomia, ropa, accesorios, libros]

let elegir= parseInt (prompt("Elegi que clase de descuento estas buscando: \n 1- Gastronomia  \n 2- Ropa \n 3- Accesorios \n 4 - libros"));

switch(elegir) {
    case 1:
        for (i of gastronomia){
            alert(i.Aliade + " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
        };
    case 2: for (i of ropa){
        alert(i.Aliade+ " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
    };
    case 3: 
    for (i of accesorios){
        alert(i.Aliade + " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
    };
    case 4: for (i of libros){
        alert(i.Aliade + " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
    };
    case 5: break;
    default: break;
}

console.log(descuentos)
alert("Queres ofrecer un beneficio?")
let Aliade = prompt ('Nombre de tu emprendimiento')
let tipoDeDescuento = prompt (' que tipo de emprendimiento tenes? \n 1- Gastronomia  \n 2- Ropa \n 3- Accesorios \n 4 - libros')
let montoDeDescuento = prompt ('que descuento te gustaria ofrecer? \n 1- 10%, \n 2-15%, \n 3- 20%')

let grupoDeAliades=( Aliade, tipoDeDescuento, montoDeDescuento );
descuentos.push

alert ('Gracias por elegirnos');

// console.log (descuentosClub);
// let volver= parseInt (prompt ("Ver mas descuentos disponibles \n 1- Gastronomia  \n 2- Ropa \n 3- Accesorios \n 4 - libros"));}

}
