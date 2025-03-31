// Prueba 1

// Ejercicio 1

// Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

function separaPalabra(item) {
  if (typeof item !== "string") return console.log("No has introducido una cadena de texto o nombre!");
  const palabraCompleta = item.trim().toUpperCase().split("").join(" ");

  return palabraCompleta;
}
console.log(separaPalabra("david"));

// Ejercicio 2

// Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
function cuentaPalabras(item) {
  if (typeof item !== "string") return console.log("No has introducido una cadena de texto o nombre!");
  return item.trim().split(" ").length;
}
console.log(cuentaPalabras("Campus the bridge"));

// Prueba 2

// Ejercicio 1

//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase
function wordCount(string, char) {
  if (typeof string !== "string") return console.log("No has introducido una cadena de texto o nombre!");
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}
console.log(wordCount("esta es una prueba para contar palabras", "a"));

//ejercicio 2

//Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números
let userNum;
do {
  userNum = Number(prompt("introduce un numero"));
} while (isNaN(userNum));
const numeroObjetivo = userNum + 50;
for (let i = userNum; i <= numeroObjetivo; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
