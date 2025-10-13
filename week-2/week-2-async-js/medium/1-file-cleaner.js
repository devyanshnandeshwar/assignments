const fs = require('fs').promises;


async function cleanFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');

        const cleanedData = data.replace(/\s+/g, ' ').trim(); // REGEX CODE

        await fs.writeFile(filePath, cleanedData, 'utf8');

        console.log('File cleaned successfully.');
    }
    catch (error) {
        console.error('Error processing the file:', error);
    }
}