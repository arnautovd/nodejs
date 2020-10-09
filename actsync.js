

const fs = require('fs');

fs.readFile('file.txt', (err, buffer) => {
    if (err) {
        console.log(err);
    }
    console.log(buffer.length);
    let src = buffer.toString();
    let data = src.split('\n').filter(line => line);
    
    fs.writeFile('result.txt', data, err => {
        if (err) console.log(err);
        console.log("We create a new content. Check this out");
    });
})