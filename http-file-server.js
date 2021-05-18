const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

http.createServer((request,response) => {

    response.writeHead(200,{'content-type':'text/plain'});
    fs.createReadStream(file,'utf-8').pipe(response);

    // let readStream = fs.createReadStream(file,'utf-8');
    // readStream.on('data', chunk => response.write(chunk));

}).listen(port);

