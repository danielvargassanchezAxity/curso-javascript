// Importar la función desde el módulo 'saludos.js'
import { sayHi } from './hi.js';

// Utilizar la función importada
const mensaje = sayHi('Daniel');
console.log(mensaje);
// @ts-ignore
// document.getElementById('mensaje').textContent = mensaje;
