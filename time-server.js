const net = require('net');

const port = process.argv[2];

net.createServer((socket) => {

    let date = new Date();

    formatteddate = date.getFullYear() + '-' +  
       ('0'+(date.getMonth()+1)).slice(-2) + '-' + 
       ('0'+date.getDate()).slice(-2) + ' ' + 
       ('0'+date.getHours()).slice(-2) + ':' + 
       ('0'+date.getMinutes()).slice(-2);

    socket.write(formatteddate+'\n');
    socket.end();
}).listen(port);

