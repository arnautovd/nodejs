

const fs = require('fs');

fs.readFile('file.txt', (err, buffer) => {
    if (err) {
        console.log(err);
    }
    console.log(buffer.length);
    let src = buffer.toString();
    console.log(src);
})