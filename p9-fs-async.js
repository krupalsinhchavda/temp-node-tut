const { readFile, writeFile } = require('fs');
console.log('start');

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-sync.txt',
        `hello there is result:${first}, ${second}`,(err, result)=>{
            if(err){
                console.log(err);
                result;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting with the new one');