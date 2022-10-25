const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt',{
    highWaterMark:90000,
});
//default size 64kb
//last buffer - reminder
//highwatermark - control size
//const stream = createReadStream('./content/big.txt',{ highwatermark:90000})
//const stream = createReadStream('../content/big.txt',{encoding: 'utf-8'})
stream.on('data',(result)=>{
console.log(result)
})
stream.on('error',(err) => console.log(err))