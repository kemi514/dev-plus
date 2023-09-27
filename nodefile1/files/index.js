const { error } = require('console');
const fs = require('fs')

fs.readFile('./starter.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
}) 


process.on('uncaughtException', err =>
{ console,error(`there was an uncaught error: ${err}`);
process.exit(1);
})