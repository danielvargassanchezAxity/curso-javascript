/* 
* Son objetos que representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante. 
* Son una forma de manejar operaciones asíncronas de manera más legible y fácilmente componible 
* Las promesas tienen tres estados posibles: pendiente (pending), resuelta (fulfilled) y rechazada (rejected). 
*/
import fetch from 'node-fetch';


// <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js"></script> para navegadores viejos
/* 
    npm install node-fetch
    https://jsonplaceholder.typicode.com/
 */

// Definimos una función que devuelve una promesa
function fetchDataFromEndpoint(url) {
    return new Promise((resolve, reject) => {
        // Usamos la API Fetch para hacer la solicitud
        fetch(url)
            .then(response => {
                // Verificamos si la respuesta es exitosa (código 200-299)
                if (!response.ok) {
                    // Si no lo es, rechazamos la promesa con el status text
                    reject(`Error: ${response.statusText}`);
                }
                // Convertimos la respuesta a JSON
                return response.json();
            })
            .then(data => {
                // Resolvemos la promesa con los datos obtenidos
                resolve(data);
            })
            .catch(error => {
                // Si hay un error en cualquier parte del proceso, rechazamos la promesa
                reject(`Network error: ${error.message}`);
            });
    });
}

// Llamamos a la función y manejamos la promesa
fetchDataFromEndpoint('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
        // Aquí manejamos los datos recibidos
        console.log('Datos recibidos:', data);
    })
    .catch(error => {
        // Aquí manejamos cualquier error que ocurra
        console.error('Hubo un problema:', error);
    });
