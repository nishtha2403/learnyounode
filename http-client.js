const http = require('http');

const url = process.argv[2];

http.get(
    url,
    resp => {
        resp.setEncoding('utf-8');

        // resp.on('data',(chunk) => console.log(chunk));

        resp.on('data',console.log);

        // resp.on('error', err => console.log(err));

        resp.on('error',console.error);
    }
).on('error', console.error);