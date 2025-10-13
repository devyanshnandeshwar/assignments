// Normal approach
const fs = require('fs')

fs.readFile('filename,txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error while reading the file", err);
        return;
    }
    console.log("File content:", data);
});

console.log("Reading file...");

let sum = 0;
for(let i = 0; i < 1e9; i++) {
    sum += i;
}
console.log("Expensive operation result:", sum);

/*
// Async await approach

const fs = require('fs').promises;

// Simulate an expensive operation
const expensiveOperation = () => {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }
    console.log('Expensive operation done');
};

// Main async function 
async functiion main() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log('File contents:', data);
    }
    catch(err) {
        if (err.code === 'ENOENT') {
            console.error('Error: File not found!');
        } else {
            console.error('Error reading file:', err);
        }
    }
    // Perform the expensive operation after file read
    expensiveOperation();
}

// Run the main function    
main();
*/

