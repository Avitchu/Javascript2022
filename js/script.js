//datos para la cuenta

const username = document.getElementById('NombreDeUsuarie')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value,
    }

    console.log(data)
})


const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}


/* 
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

let elegir= parseint(prompt("Elegi que clase de descuento estas buscando: \n 1- Gastronomia  \n 2- Ropa \n 3- Accesorios \n 4 - libros"));

switch(elegir) {
    case '1':
        for (i of gastronomia){
            alert(i.Aliade + " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
            break;
            console.log(gastronomia)

        };
    case '2': for (i of ropa){
        alert(i.Aliade+ " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
        break;
        console.log(ropa)
    };
    
    case '3': 
    for (i of accesorios){
        alert(i.Aliade + " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
        console.log(accesorios)
        break;
    };
    case '4': for (i of libros){
        alert(i.Aliade + " "+ i.tipoDeDescuento + " "+ i.montoDeDescuento+ " ")
        break;
        console.log(libros)
    };
    case '5': break;
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

//COPIADO


const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}
 */