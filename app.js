// const { argv } = require('process');
// const { boolean } = require('yargs');
//const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');


//const base = 10;
console.clear();

//console.log(process.argv);
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(base);

// console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.b);
console.log('listar: yargs', argv.l);
console.log('hasta: yargs', argv.h);


crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo, 'creado') )
.catch( err => console.log(err) );





