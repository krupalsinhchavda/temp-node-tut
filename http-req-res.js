const { write } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('welcome to our home page')
   }
if (req.url === '/about'){
    res.end('here is show our history')
}    
res.end(`
<h1>Ooops!</h1>
<p> We can't see to find the page you are looking for </p>
<a href="/"> back home </a>
`)
})

server.listen(5000)