// /*
//     El destructuring en JavaScript es una sintaxis especial que permite extraer valores de arreglos 
//     o propiedades de objetos y asignarlos a variables de manera más concisa y legible. 
//     Es una característica poderosa que simplifica el código y mejora su claridad.
// */

const [a, b] = [1, 2, 3]; 
console.log(a);
console.log(b);

const user =  
{ 
    firstName: 'Juan', 
    age: 30,
    isActive: true,
    hobbies: ['leer', 'correr', 'programar'],
    direction: {
        street: 'Benito Juarez',
        number: 123,
        city: 'Mexico',
        country: 'Mexico'
    },
    gender: 'Male'
}; 
const { firstName, gender, direction } = user;
console.log(firstName);
console.log(gender);
console.log(direction.street);


// Puedes omitir elementos del arreglo usando comas. 
const numberList = [1, 2, 3, 4]; 
const [, , tercero, cuarto] = numberList; 
console.log(tercero); // 3 
console.log(cuarto); // 4 

 
// Renombrar variables  
const { firstName: fullName, age: userAge } = user;
console.log(fullName);
console.log(userAge);
