// tipos de datos
// number

let myNumber = 10;
let decimalNumberExample = 10.12345;

// string
let userName = "Fernanda";
const MESSAGE = "Hola " + userName;

// boolean
let isActive = true;
isActive = false;

/* 
    Array (Arreglo):
    Representa una colección ordenada de elementos. 
    Los arreglos pueden contener cualquier tipo de dato, incluyendo otros arreglos.
*/
let numbersList = [1,2,3,4];
let colors = ["red", "blue", "orange"];

/*  
    Object (Objeto): 
    Representa una colección de pares clave-valor. 
    Los objetos en JavaScript son contenedores de propiedades, donde cada propiedad tiene un nombre y un valor asociado.
*/  
let person = {
    name: 'Daniel',
    age: 27,
    city: "México"
};

/*
    Null (Nulo): 
    Representa la ausencia intencional de cualquier valor o referencia de objeto.
*/
let nullValue = null;


/* 
    Undefined (Indefinido): 
    Representa el valor de una variable que no ha sido asignada, o una propiedad que no existe en un objeto.
*/
let undefinedValue;

/* 
    Symbol (Símbolo): 
    Representa un identificador único e inmutable, útil para crear propiedades de objeto no enumerables.
    Eso quiere decir que no serán accesibles
*/
let exampleObjectWithoutSymbol = {
    description: 'Valor de la propiedad'
};
console.log(exampleObjectWithoutSymbol.description);


const key = Symbol("description");
let exampleObjectWithSymbol = {
    name: "daniel",
    [key]: 'Valor de la propiedad con symbol'
};

// si iteramos sus propiedades no aparecera ese symbol
for (let property in exampleObjectWithSymbol) {
    console.log(property);
}

// pero podemos acceder a el de la siguiente forma
console.log(Object.getOwnPropertyDescriptor(exampleObjectWithSymbol, key)?.value);