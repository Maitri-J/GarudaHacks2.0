const http = require("http");
const fs = require("fs");
const path = require('path')
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});

    let url = req.url;
    if(url === '/index') {
        fs.readFile(path.join(__dirname, 'index.html'), (error,data) => {
            if (error) throw error
            res.end(data)
        })
    }  
    else if (url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), (error,data) => {
            if (error) throw error
            res.end(data)
        })
    } 

});

server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong",error);
    } else {
        console.log("Server is listening on port " + port);
    }
})
