
const fs = require('fs');

const buffer = fs.readFileSync('file.txt');
const src = buffer.toString();

const lines = src.split('\n').filter(line => line);
console.log(lines);

console.log(buffer.length);
console.log(src);