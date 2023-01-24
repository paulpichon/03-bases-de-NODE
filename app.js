
//require de la funcion crearArchivo
const { crearArchivo } = require('./helpers/multiplicar');

//tabla del 5
//limpiar la consola antes de ejecutar codigo
console.clear();

const base = 9;

//llamar funcion
crearArchivo( base )
    .then( respuesta => console.log( respuesta ) )
        .catch( err => console.log( err ) );