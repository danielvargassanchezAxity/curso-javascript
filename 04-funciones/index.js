// funciones sin valor de retorno 
function sayHi() {
    console.log("hola que tal");
}

// tenemos dos maneras de tipar en javascript usando visual studio code
// definiendo un valor por default 
function addTwoNumbers(number1 = 0, number2 = 0) {
    console.log(number1 + number2);
}
addTwoNumbers(10, 2);

// con comentarios
/**
 * Suma dos números y devuelve el resultado.
 * @param {number} a El primer número.
 * @param {number} b El segundo número.
 * @returns {number} El resultado de la suma.
 */
function addTwoNumbersWithReturn(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' ) return 0;  
    return a+ b;
}
var result = addTwoNumbersWithReturn(1, 1);
console.log(result);

// sin embargo siempre javascript va a ser mas permisivo en cuanto a lo que hará el navegador