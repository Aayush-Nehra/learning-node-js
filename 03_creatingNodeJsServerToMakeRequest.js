const http = require('http');

var server = http.createServer(function(req,res) {
    if(req.url == '/'){
        //set response header
        res.writeHead(200,{'Content-Type':'text/html'});

        //set response content
        res.write(`<html><body><p>This is home Page.</p></body></html>`)
        res.end();
    }
    else if(req.url == '/student'){
        //set response header
        res.writeHead(200,{'Content-Type':'text/html'});

        //set response content
        res.write(`<html><body><p>This is student Page.</p></body></html>`)
        res.end();
    }
    else if(req.url == '/admin'){
        //set response header
        res.writeHead(200,{'Content-Type':'text/html'});

        //set response content
        res.write(`<html><body><p>This is admin Page.</p></body></html>`)
        res.end();
    }
    else{
        res.end("Invalid Request")
    }
});

server.listen(5000);
console.log('Node.js web server running at port 5000...')