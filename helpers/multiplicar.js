const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar, hasta ) => {
    console.log(colors.america('======================'))
    console.log(`Tabla del: ${ colors.blue( base.toString() ) }`)
    console.log( colors.green( '======================' ))
    try {
        let salida = '';
        for ( let _iCont = 1; _iCont <= hasta; _iCont++ ){
            //console.log(`${ base } x ${ _iCont } = ${ base * _iCont }`)
            salida += `${ base } x ${ _iCont } = ${ base * _iCont }\n`;
        }
        if (listar) console.log(salida.rainbow);
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        //console.log(`tabla-${base}.txt creada`);    
        return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}