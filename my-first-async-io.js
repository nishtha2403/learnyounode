const fs = require('fs');

fs.readFile(process.argv[2],'utf-8',(err,data) => {
    if(err) { throw err};
    const noOfLines = data.split('\n').length - 1;
    console.log(noOfLines);
})