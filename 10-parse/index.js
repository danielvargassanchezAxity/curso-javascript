// La función JSON.stringify() convierte un objeto de JavaScript en una cadena de texto en formato JSON. 
// JSON.stringify(valor); 

const firstUser = { 
    name: 'Juan', 
    age: 30,
    isActive: true,
    hobbies: ['leer', 'correr', 'programar'],
    direction: {
        street: 'Benito Juarez',
        number: 123,
        city: 'Mexico',
        country: 'Mexico'
    }
}; 
 
const jsonString = JSON.stringify(firstUser);
console.log(jsonString);
console.log(firstUser);


const jsonStringTest = '{"nombre":"Juan","edad":30,"esActivo":true}';  
const userParse = JSON.parse(jsonStringTest);
console.log(userParse);

