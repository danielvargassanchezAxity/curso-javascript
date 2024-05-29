// if 
let productActive = true;

if (productActive) {
    console.log("Producto está activo");
} else {
    console.log("Producto inactivo");
}

// switch 
let errorCode = 400;
switch(errorCode) {
    case 200:
        console.log("Ok");
        break;
    case 400: 
        console.log("Bad Request");
        break;
    case 401:
        console.log("Authorization");
        break;
    case 500: 
        console.log("Internal Server Error")
        break;
    default: 
        console.log("Error");   
}



/**
 * Validate http status.
 * @param {number} errorCode http status.
 */
function validateHttpStatus(errorCode) {
    switch(errorCode) {
        case 200:
            console.log("Ok");
            break;
        case 400: 
            console.log("Bad Request");
            break;
        case 401:
            console.log("Authorization");
            break;
        case 500: 
            console.log("Internal Server Error")
            break;
        default: 
            console.log("Error");   
    }
}
validateHttpStatus(120);