const chalk = require('chalk')
// const msg =require('./data')
const http = require('http')
const fs = require('fs')
const path=require('path')

const myServer = http.createServer((request, response) => { 
    // if (request.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, data) => {
    //         if (error) { throw error }
    //         response.writeHead(200, {
    //     'Content-Type':'text/html'
    //         })
    //         response.end(data)
    //     })
    // }else if (request.url === '/contacts') {
    //     fs.readFile(path.join(__dirname, 'public', 'contacts.html'), (error, data) => {
    //         if (error) { throw error }
    //         response.writeHead(200, {
    //     'Content-Type':'text/html'
    //         })
    //         response.end(data)
    //     })
    // }
    
    let filePath = path.join(__dirname, 'public',  request.url === '/' ? 'index.html' : request.url)
    const ext = path.extname(filePath);
    console.log(ext);
    let contentType='text/html';

    switch (ext) {
        case '.css': contentType = 'text/css';
            break;
        case '.js': contentType = 'text/javascript';
            break;
        default: contentType = 'text/html';
}

    if (!ext) {
        filePath+='.html'
    }


fs.readFile(filePath, 'utf-8',(error, content) => {
    if (error) {
        fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, data) => {
            if (error) {
                response.writeHead(500)
                response.end()
            }
            else {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.end(data)
            }
           
        })
    } else {
        response.writeHead(200, {
            'Content-Type': contentType
        })
            
        console.log(content);
        response.end(content)
    }
        })
    
    
})


const PORT=process.env.PORT||3000

myServer.listen(PORT, () => {
    console.log(`Server has been created on port ${PORT}...`);
})