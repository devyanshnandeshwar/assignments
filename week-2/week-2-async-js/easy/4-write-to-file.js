const fs = require('fs').promises;

async function writeToFile(filena, content, encoding = 'utf8') {
    try{
        await fs.writeFile(filename, content, encoding);
        console.log('FIle has been written successfully');
    }
    catch(error) {
        console.error('Error writing to file:', error);
    }
}

writeToFile('example.txt', 'Hello, world!');

/*
Normal approach
const fs = require('fs');
const data = 'Hello, world!';
fs.writeFile('example.txt', data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File has been written successfully');
}

*/