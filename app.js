
//require de la funcion crearArchivo
const { crearArchivo } = require('./helpers/multiplicar');

//tabla del 5
//limpiar la consola antes de ejecutar codigo
console.clear();


//obtener los arguemntos del process.argv
//desestructuracion
//podemos poner por defecto el valor del arg3
const [ , , arg3 = 'base=5' ] = process.argv;
//desestructuramos a partir de arg3.split()
//estos es lo que vamos a separar  --base=5
const [ , base = 5 ] = arg3.split('=');


console.log( base );


//const base = 9;

// llamar funcion para crear archivo
crearArchivo( base )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
        .catch( err => console.log( err ) );