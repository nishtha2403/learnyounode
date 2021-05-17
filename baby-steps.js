let sum = process.argv.slice(2).reduce((acc,curr) => acc+parseInt(curr),0);
console.log(sum);