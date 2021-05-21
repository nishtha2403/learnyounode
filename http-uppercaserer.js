const http = require('http');

const port = Number(process.argv[2]);

http.createServer((request,response) => {
    let data = '';
    request.on('data',chunk => data += chunk);

    request.on('end', () => {
    const reqType = request.method;

    switch(reqType) {
        case 'POST': 
            let result = data.toUpperCase();
            response.write(result);
            response.end();
            break;
    }
    })
    


}).listen(port);