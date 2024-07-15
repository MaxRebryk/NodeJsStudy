import path from 'node:path';
import fs from 'node:fs/promises';

// const somePath = path.join('/src', '/text');
// console.log(somePath);

// const data = fs.readFileSync(path.resolve('src/text'), 'UTF-8');
// console.log(data);

// fs.readFile(path.resolve('src/text'), 'UTF-8', (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data + ' ' + 'text');
// });

fs.readFile(path.resolve('src/text'), 'UTF-8')
  .then((data) => {
    console.log(data + ' ' + 'text');
  })
  .catch((error) => {
    throw error;
  });

// fs.writeFile(path.resolve('src/text'), 'Hello written', 'utf8')
//   .then(() => {
//     console.log('File written successfully');
//   })
//   .catch((error) => {
//     console.error('Error writing file:', error);
//   });

fs.appendFile(path.resolve('src/text'), 'id\n', 'utf8')
  .then(() => {
    console.log('File written successfully');
  })
  .catch((error) => {
    console.error('Error writing file:', error);
  });
