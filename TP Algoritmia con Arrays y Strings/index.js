//Crear array de palabras
const palabras = [];

for (let i = 0; i < 5; i++) {
  const palabra = prompt("Ingresá la palabra " + (i + 1));
  palabras.push(palabra);
}

console.log("Array original:", palabras);

//Manipular array
palabras.unshift("inicio");
palabras.push("final");
palabras.splice(1, 1); // posición 1 = la segunda palabra, borra 1 elemento

console.log("Array actualizado:", palabras);

//Analizar las palabras
let masLarga = palabras[0];
let hayA = false;

for (let i = 0; i < palabras.length; i++) {
  console.log(palabras[i] + " tiene " + palabras[i].length + " letras");

  if (palabras[i].length > masLarga.length) {
    masLarga = palabras[i];
  }

  if (palabras[i].includes("a")) {
    hayA = true;
  }
}

console.log("La palabra más larga es:", masLarga);
console.log("¿Alguna palabra contiene 'a'?", hayA);

//Invertir palabras
const invertidas = [];

for (let i = 0; i < palabras.length; i++) {
  const alReves = palabras[i].split("").reverse().join("");
  invertidas.push(alReves);
}

console.log("Array invertido:", invertidas);
alert("Palabras invertidas: " + invertidas.join(", "));

//Palíndromos
const respuesta = prompt("¿Querés comprobar palíndromos? (sí/no)");

if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
  for (let i = 0; i < palabras.length; i++) {
    const original = palabras[i].toLowerCase();
    const alReves = original.split("").reverse().join("");

    if (original === alReves) {
      console.log(palabras[i] + " es palíndromo ✅");
    }
  }
} else {
  console.log("No se comprobaron palíndromos.");
}

//Bonus
let cantidadLargas = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 4) {
    cantidadLargas++;
  }
}

console.log("Palabras con más de 4 caracteres:", cantidadLargas);
console.log("Todas unidas:", palabras.join("-"));