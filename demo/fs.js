const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'new-folder'), error => {
//     if (error) {
//         throw error
//     }

//     console.log('Directory created!');
// })

const filePath = path.join(__dirname, 'new-folder', 'text.txt')
// fs.writeFile(filePath, 'this is new file content', error => {
//     if (error) {
//         throw error
//     }

//     console.log('New txt created!');
// });
// fs.appendFile(filePath, '\n\nthis is appended content', error => {
//     if (error) {
//         throw error
//     }

//     console.log('New content appended!');
// });

fs.readFile(filePath,'utf-8', (error, content) => {
    if (error) { throw error }
    
    // const data=Buffer.from(content)
    // console.log('Content: ', data.toString());

    console.log(content);
})