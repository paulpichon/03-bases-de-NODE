//limpiar la consola antes de ejecutar codigo
console.clear();

//require de la funcion crearArchivo
const { crearArchivo } = require('./helpers/multiplicar');
//require/import de argv del archivo yargs.js
const argv = require('./config/yargs');

//colors
require('colors');






//console.log( process.argv );
// este argv viene del require que instalamos de YARGS
// console.log( argv );

//obtener los arguemntos del process.argv
//desestructuracion
//podemos poner por defecto el valor del arg3
// const [ , , arg3 = 'base=5' ] = process.argv; 
//desestructuramos a partir de arg3.split()
//estos es lo que vamos a separar  --base=5
// const [ , base = 5 ] = arg3.split('='); 

//const base = 9;

// llamar funcion para crear archivo
crearArchivo( argv.b, argv.l, argv.h )
    //rainbow es del require colors
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ) )
        .catch( err => console.log( err ) );