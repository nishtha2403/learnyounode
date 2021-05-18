const http = require('http');

const url = process.argv[2];

http.get(url, resp => {
    resp.setEncoding('utf-8');

    let data = '';

    resp.on('data', chunk => data += chunk);

    resp.on('end', () => {
        const noOfChar = data.length;
        console.log(noOfChar);
        console.log(data);
    })

    resp.on('error',console.error);

}).on('error',console.error);