var x = require('http')
x.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Welcome to Node.js');
    // ser.write('Hello World');
    // ser.end();
}
).listen(8081);
console.log('Server running at port number:8081 ');
