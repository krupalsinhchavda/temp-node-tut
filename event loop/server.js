const http = require('http')

const server = http.createServer((res, res) =>{
    console.log('request event')
    res.end('hello krupalsinh')
})

server.listen(5000, () =>{
    console.log('server listing on port: 5000....')
})