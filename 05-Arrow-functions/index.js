/*
Las "arrow functions" o funciones flecha son una característica introducida en ECMAScript 6 (ES6) en JavaScript. 
Son una sintaxis más corta y concisa para escribir funciones. 
Además de ser más compactas, 
las arrow functions también tienen un comportamiento especial con respecto al manejo del contexto (this).
*/

/*
funcion tradicional
*/
function add(a, b) {
    return a + b;
}
// Arrow function
const addArrow = (a, b) => a + b;

// Utilizar arrow functions para crear funciones que retornan otras funciones.
const createMultiply = multiplier => quantity => quantity * multiplier;
const multiplyTwo = createMultiply(2);
const multiplyFive = createMultiply(5);

console.log(multiplyTwo(10)); // 20
console.log(multiplyFive(10)); // 50

// Combinar varias funciones pequeñas en una función más compleja.
const addTax = price => price * 1.21;
const roundPrice = price => Math.round(price * 100) / 100;
const formatPrice = quantity => `$${quantity.toFixed(2)}`;

const finalPrice = formatPrice(roundPrice(addTax(100)));
console.log(finalPrice); // $121.00
