const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const filterThisExtension = '.'+process.argv[3];

fs.readdir(
    dirPath,
    (err,files) => {
        if(err) throw err;
        files.forEach(filename => {
            if(path.extname(filename) === filterThisExtension)
                console.log(filename);
        });
    }
)