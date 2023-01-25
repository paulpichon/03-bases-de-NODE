//file system = fs
//se importa el pauqte 'fs
const fs = require('fs');
//colors
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {

            //variable que se usara para grabar la tabla en un archivo
            //consola para poder arreglar el problema con los archivos txt y colors
            let salida, consola = '';

            for( let i = 1; i <= hasta; i++ ) {
                //imprimir la tabla
                //salida += sera usado para guradar la tabla en un archivo
                //salida se guardara en el archivo txt
                salida += (`${base} x ${i} = ${base * i}\n`);
                //consola se mostrar precisamente en consola con colores
                consola += (`${colors.green(base)} ${ colors.red('x') } ${colors.yellow(i)} ${'='.green} ${colors.cyan(base * i) }\n`);
            }
            if (listar) {

                console.log('================================================='.green);
                console.log('                TABLA DEL:'.green, colors.yellow(base));
                console.log('================================================='.green);
                //imprimir en pantalla la tabla
                console.log( consola );
            }

            // grabar en un archivo
            fs.writeFileSync(`tabla-${base}.txt`, salida);

            return (`Tabla-${base}.txt creado`);
            
    } catch (error) {
        throw error;
    }

}

//exportar un archivo mediante module.exports que es algo que existe en NODE
module.exports = {
    // crearArchivo: crearArchivo   esto es lo mismo que lo de abajo
    crearArchivo
}