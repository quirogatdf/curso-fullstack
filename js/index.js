const btnComprar = document.getElementById("boton-comprar");
const containerProductos = document.getElementById("container-productos");
const btnAgregar = document.getElementById("boton-agregar");
let valorTotal = 0;
//almaceno stock Harcodeado (solo por si quieren validar contra stock)
let stock = [10, 12, 9, 3, 4];
//almacena lista de productos en arreglo global
let productos = [
  "Papel higienico",
  "Harina",
  "Yerba",
  "Azucar",
  "Fideos"
];
//almacena precios Unitarios en arreglo global
let precioUnitario = [108, 50, 270, 65, 70];

function cargarProductos() {
  for (let i = 0; i < stock.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("item-producto");
    divProducto.id = `producto-${i}`;
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = productos[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = `$${precioUnitario[i]}`;
    let selectorCantidad = document.createElement("input");
    selectorCantidad.id = `selector-cantidad-${i}`;
    selectorCantidad.type = "number";
    selectorCantidad.max = String(stock[i]);
    selectorCantidad.min = "0";
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(selectorCantidad);
    containerProductos?.appendChild(divProducto);
  }
};
function comprar() {
  valorTotal = 0;
  let cantidadSeleccionada = []
  for (let i = 0; i < stock.length; i++) {
    let selectorCantidad = document.getElementById(`selector-cantidad-${i}`);
    cantidadSeleccionada.push(Number(selectorCantidad.value));
    if (cantidadSeleccionada[i] > 0) {
      console.log(
        `Compraste ${cantidadSeleccionada[i]} unidades de ${productos[i]}`
      );
      
      valorTotal += precioUnitario[i] * cantidadSeleccionada[i];
    }
  }
  const aux = validarCompra(cantidadSeleccionada);
  if (!aux.success) {
    console.log(aux.message);
  } else {
    console.log(`El costo total de su compra es $${valorTotal}`);
  }
};

function validarCompra(cantidadSeleccionada) {
  let validate = {
    success:true,
    message:''
  }
  for (let i = 0; i < stock.length; i++) { 
     / *Verifica que la cantidad ingresada sea menor al stock disponible */
    if (cantidadSeleccionada[i] > stock[i]) {
      validate = {
        success: false,
        message: `No disponemos de suficientes unidades de ${productos[i]}`
      } 
      break;
    } else {
      /* Actualiza el stock disponible, restando la cantidad ingresada */
      stock[i]-=cantidadSeleccionada[i];
    }
  }
  return validate
}


// window.addEventListener("load", cargarProductos);
window.onload = cargarProductos();
btnComprar.addEventListener("click", comprar);
btnAgregar?.addEventListener("click", agregar);
