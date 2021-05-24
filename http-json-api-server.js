const http = require('http');
const url = require('url');

const port = process.argv[2];

http.createServer((req,res) => {
    const reqType = req.method;
    const reqUrl  = req.url;

    if(reqType == 'GET') {
        const reqUrlArray = reqUrl.split('?');
        const url = reqUrlArray[0];

        const queryValue = reqUrlArray[1].split('=');
        const time = queryValue[1];

        let date = new Date(time);

        if(url == '/api/parsetime'){

            res.write(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }))

            res.end(() => {});

        }

        if(url == '/api/unixtime'){
            res.write(JSON.stringify({
                unixtime: date.getTime()
            }))

            res.end();
        }
    }

    res.end(() => {});
    

}).listen(port);