
// Haré todos los ejercicios en una sola Hoja, dejaré comentado 4 y ejecutable 1, para evitar enviar muchos archivos como evidencia.

/* 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

-----------------------PARA REVIVAR EJERCICIO DESCOMENTAR, POR FAVOR SENSEI---------------------------------------------
let numeroUsuario = parseInt(prompt("Introduce un número:"));

let i = 1;

while (i <= numeroUsuario) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
} */
// ----------------------------------------------------------------------

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

// -----------------------PARA REVIVAR EJERCICIO DESCOMENTAR, POR FAVOR SENSEI---------------------------------------------

/* let numero1 = parseInt(prompt("Introduce el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Introduce el segundo número (entre 1 y 50):"));

// Validar que los números estén en el rango correcto
if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
    console.log("Por favor, introduce números entre 1 y 50.");
} else {
    let i = 1;

    while (i <= 50) {
        if (i === numero1 || i === numero2) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }
        i++;
    }
} */
// ----------------------------------------------------------------------

// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

// -----------------------PARA REVIVAR EJERCICIO DESCOMENTAR, POR FAVOR SENSEI---------------------------------------------

/* let numeros = [];
let otrosValores = [];

while (true) {
    let entradaUsuario = prompt("Introduce un valor (cuando termines de introducir valores ingresa 0 para cerrar ) :");
    
    if (entradaUsuario === "0") {
        break;
    }

    let numeroUsuario = parseFloat(entradaUsuario);

    if (!isNaN(numeroUsuario)) {
        numeros.push(numeroUsuario);
    } else {
        otrosValores.push(entradaUsuario);
    }
}

console.log("Números capturados: " + (numeros.length > 0 ? numeros.join(', ') : 'Ninguno'));

if (otrosValores.length > 0) {
    console.log("Otros valores: " + otrosValores.join(', '));
} */


// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

/* let palabras = [];
let palabra = prompt("Ingresa una palabra o letra:");

while (palabra !== "") {
  palabras.push(palabra);
  palabra = prompt("Ingresa otra palabra o letra: (Enter para finalizar)");
}

let resultado = palabras.join(', ');
console.log(resultado); */


// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let diaSemana = prompt("Ingresa un día de la semana (ej: lunes, jueves, domingo, etc):");

while (diaSemana !== "") {
  switch (diaSemana.toLowerCase()) {
    case "lunes":
      alert("Hoy es lunes. ¡Ánimo, que la semana recién comienza!");
      break;
    case "martes":
      alert("Hoy es martes. ¡A darle con todo!");
      break;
    case "miércoles":
      alert("Hoy es miércoles. ¡Ya estamos a mitad de semana!");
      break;
    case "jueves":
      alert("Hoy es jueves. ¡Ya casi llegamos al fin de semana!");
      break;
    case "viernes":
      alert("Hoy es viernes. ¡Por fin llegó el fin de semana!");
      break;
    case "sábado":
      alert("Hoy es sábado. ¡Disfruta tu fin de semana!");
      break;
    case "domingo":
      alert("Hoy es domingo. ¡Ve a descansar!");
      diaSemana = "";
      break;
    default:
      alert("El día ingresado no es válido. Por favor, intenta de nuevo.");
      break;
  }
  if (diaSemana !== "") {
    diaSemana = prompt("Ingresa otro día de la semana (o presiona Cancelar para terminar):");
  }
}
