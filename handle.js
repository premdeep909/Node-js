// how to create server 
const http = require('http');
const server = http.createServer((req,res) =>{
const url =  req.url;
if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Node JS response</title></head>');
    res.write('<body><form action="/message" method="post"><input type="text" name="myMessage"/><button type="submit" >Submit</button></form></body>');
    res.write('</html>');
    return res.end();
}
res.setHeader('Content-Type' ,'text/html');
res.write('<html>')
res.write('<header><title>Node JS response</title></header>')
res.write('<body><h1>Hello From Node JS!</h1></body>')
res.write('</html>')
res.end();
})
server.listen(3001);