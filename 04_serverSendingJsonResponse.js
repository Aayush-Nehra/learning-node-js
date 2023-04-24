var http = require('http')

var server = http.createServer((req,res)=>{
    if(req.url == '/data'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            message: "Hello World",
            key: "This is my first object"
        }))
        res.end();
    }
})

server.listen(5000);
console.log('Node.js web server at port 5000 is running...')