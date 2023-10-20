const fs = require('fs');

async function readFileAsync(filename) {
  const contents = await fs.promises.readFile(filename, 'utf8');
  return contents;
}

// Example usage:

const text = await readFileAsync('my-file.txt');
console.log(text);
