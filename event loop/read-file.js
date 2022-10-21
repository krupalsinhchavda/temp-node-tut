const { readFile } = require('fs')

console.log('started first task')
//cheack file path..

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed fist task')

})
console.log('start next task')