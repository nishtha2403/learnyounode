const http = require('http');

let count = 0;
const result = [];

function getHttp(index) {

    let url = process.argv[2+index];

    http.get(url , resp => {
        resp.setEncoding('utf-8');
    
        let data = '';
        resp.on('data', (chunk) => data += chunk);
    
        resp.on('end', () => {
            result[index] = data;
            count++;
            if(count == 3)
                printResults();
        })
    
    })
}

for(let index =0 ;index<3;index++){
    getHttp(index);
}

function printResults(){
    result.forEach(data => console.log(data));
}