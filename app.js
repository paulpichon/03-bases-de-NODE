//file system = fs
//se importa el pauqte 'fs
const fs = require('fs');

//tabla del 5
//limpiar la consola antes de ejecutar codigo
console.clear();
console.log('=================================================');
console.log('=============        TABLA DEL 5      ===========');
console.log('=================================================');

const base = 2;
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
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;

    console.log(`Tabla-${base}.txt creado`);
});

