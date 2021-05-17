const fs = require('fs');
const path = require('path');

let myFunction = (dirName,fileExt,callback) => {
    fileExt = '.'+fileExt;
    fs.readdir(dirName,(err,filenames) => {
        if(err) return callback(err);
        const filteredLs = 
        filenames.filter(filename => path.extname(filename) === fileExt);
        callback(err,filteredLs);
    });
}

module.exports = myFunction;