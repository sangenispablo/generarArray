// declarar funciones
function generarNumeroAlAzar(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pedirCantidad() {
  let cantidad = prompt("Ingresa un valor numero (mayor que 5)");
  cantidad = parseInt(cantidad);
  return cantidad;
}

function generarArray(cantidad) {
  const arrayInterno = [];
  for (let i = 0; i < cantidad; i++) {
    arrayInterno.push(generarNumeroAlAzar(10, 99));
  }
  return arrayInterno;
}

function mostrarArray(arrayAMostrar) {
  for (let i = 0; i < arrayAMostrar.length; i++) {
    const element = arrayAMostrar[i];
    console.log(element);
  }
}

// crear una funcion que me devuelva un saludo de despedida
function saludoDespedida(nombre = "Sin nombre") {
  return "Chau " + nombre;
}

let arrayAleatorio = [];

const cantUsuario = pedirCantidad();
arrayAleatorio = generarArray(cantUsuario);
mostrarArray(arrayAleatorio);
console.log("-----------------------------------------");
// voy a ordenar el array
mostrarArray(arrayAleatorio.sort());
console.log("-----------------------------------------");
// voy a ordenar el array
mostrarArray(arrayAleatorio.sort((a, b) => b - a));
console.log(saludoDespedida("Pablo"));
