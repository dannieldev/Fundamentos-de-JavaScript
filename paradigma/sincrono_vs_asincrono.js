const fs = require('fs');
file ='./assets/archivo.txt';
//COdigo Síncrono
console.time('Sincrono');
console.log('\nAbriendo Archivo..');
let content;
try{
    content = fs.readFileSync(file,'utf8')
    console.log(content);
}catch(err){
    console.log(err.message);
}
console.timeEnd('Sincrono');
console.log('Mas cosas');
//COdigo ASíncrono
console.time('Asincrono');
content = fs.readFile(file,'utf8',(err,content)=>(err) ? console.log(err.message): console.log(content));
console.log('Otra cosas');
console.timeEnd('Asincrono');