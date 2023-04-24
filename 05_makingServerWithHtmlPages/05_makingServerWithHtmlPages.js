const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res) {
    console.log(req.url);
    if(req.url == '/'){
        //set response header
        let data = fs.readFileSync('./home.html')
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    }
    else if(req.url == '/about'){
        //set response header
        let data = fs.readFileSync('./about.html')
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    }
    else if(req.url == '/contacts'){
        //set response header
        let data = fs.readFileSync('./contacts.html')
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    }
    else{
        res.end("Invalid Request")
    }
});

server.listen(5000,'127.0.0.1');
console.log('Node.js web server running at port 5000...')