//requerir el yargs
//configurando 
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .check( (argv, options) => {
            //se verifica si base=b es un numero
            if ( isNaN( argv.b ) ) {
                //lanzamos un mensaje
                throw 'La base tiene que se un número';
            }
            //en caso de que todo sea correcto y la base sea un número se da un return true
            return true;
        })
        .argv;


//exportar modulo
//esportar por defecto
//para poder ser usado en el archivo app.js
module.exports = argv;