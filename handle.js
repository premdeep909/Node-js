// how to create server 
const http = require('http');
const server = http.createServer((req,res) =>{
//console.log(req);
res.setHeader('Content-Type' ,'text/html');
res.write('<html>')
res.write('<header><title>Node JS response</title></header>')
res.write('<body><h1>Hello From Node JS!</h1></body>')
res.write('</html>')
res.end();
})
server.listen(3000);