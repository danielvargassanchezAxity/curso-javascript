/* 
* Es una característica introducida en ES6 que permite expandir elementos de un iterable en lugares donde se esperan múltiples elementos. 
* El spread operator se usa comúnmente para copiar y combinar arrays, así como para clonar objetos y fusionarlos. 
*/


const originalData = [1, 2, 3]; 
// const copyData = originalData; // esto es una mala manera de copiar
const copyData = [...originalData]; 
copyData[0] = 100;
console.log(originalData);
console.log(copyData);
 
// Combinarlos 
const arr1 = [1, 2];
const arr2 = [3, 4];
const combination = [...arr1, ...arr2];
console.log(combination);

const start = [1, 2]; 
const complete = [0, ...start, 3]; 
console.log(complete);

// Copiar un Objeto: Puedes hacer una copia superficial de un objeto usando el spread operator. 
const originalObject = { a: 1, b: 2 }; 
const copyObject = { ...originalObject }; 
originalObject.a = 1000;

console.log(originalObject);
console.log(copyObject);

// Fusionar Objetos: El spread operator permite combinar propiedades de varios objetos en uno solo. 
const obj1 = { a: 1, b: 2 }; 
const obj2 = { c: 3, d: 4 }; 
const combinado = { ...obj1, ...obj2 }; 
console.log(combinado); // { a: 1, b: 2, c: 3, d: 4 } 
 

// Agregar o Sobrescribir Propiedades de un Objeto: Puedes agregar nuevas propiedades o sobrescribir existentes. 
const base = { a: 1, b: 2 }; 
const extended = { ...base, b: 3, c: 4 }; 
console.log(extended); // { a: 1, b: 3, c: 4 } 

// Pasar Argumentos a Funciones: 
const numeros = [1, 2, 3, 4]; 
function sumar(a, b, c) { 
    return a + b + c; 
} 
console.log(sumar(...numeros));