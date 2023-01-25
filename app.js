//require de la funcion crearArchivo
const { crearArchivo } = require('./helpers/multiplicar');
//requerir el yargs
const argv = require('yargs').argv;

//tabla del 5
//limpiar la consola antes de ejecutar codigo
console.clear();


console.log( process.argv );
// este argv viene del require que instalamos de YARGS
console.log( argv );

console.log( 'base: yargs', argv.base );

//obtener los arguemntos del process.argv
//desestructuracion
//podemos poner por defecto el valor del arg3
// const [ , , arg3 = 'base=5' ] = process.argv; 
//desestructuramos a partir de arg3.split()
//estos es lo que vamos a separar  --base=5
// const [ , base = 5 ] = arg3.split('='); 

//const base = 9;

// llamar funcion para crear archivo
// crearArchivo( base )
//     .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
//         .catch( err => console.log( err ) );