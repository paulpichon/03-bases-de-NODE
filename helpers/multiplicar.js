//file system = fs
//se importa el pauqte 'fs
const fs = require('fs');

const crearArchivo = async( base = 5) => {


    try {

        console.log('=================================================');
        console.log('                TABLA DEL:', base);
        console.log('=================================================');


        //variable que se usara para grabar la tabla en un archivo
        let salida = '';

        for( let i = 1; i <= 10; i++ ) {
            //imprimir la tabla
            //salida += sera usado para guradar la tabla en un archivo
            salida += (`${base} x ${i} = ${base * i }\n`);
        }
        //imprimir en pantalla la tabla
        console.log( salida );

        // grabar en un archivo
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return (`Tabla-${base}.txt creado`)
            
    } catch (error) {
        throw error;
    }

}

//exportar un archivo mediante module.exports que es algo que existe en NODE
module.exports = {
    // crearArchivo: crearArchivo   esto es lo mismo que lo de abajo
    crearArchivo
}