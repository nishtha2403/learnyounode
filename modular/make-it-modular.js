const myFunction = require('./mymodule');

const dirName = process.argv[2];
const fileExt = process.argv[3];

myFunction(dirName,fileExt,(err,data) => {
    if(err) throw err;
    data.forEach(file => console.log(file));
})