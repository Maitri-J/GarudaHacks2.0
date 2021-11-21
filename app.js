const http = require("http");
const fs = require("fs");
const path = require('path')
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});

    let url = req.url;
    if(url === '/') {
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
    else if (url === '/info') {
        fs.readFile(path.join(__dirname, 'info.html'), (error,data) => {
            if (error) throw error
            res.end(data)
        })
        fs.readFile('organic.jpeg', function (err, data) {
            if (err) throw err;
            res.write(data);
        })
    } 
    else if (url === '/camera') {
        fs.readFile(path.join(__dirname, 'camera.html'), (error,data) => {
            if (error) throw error
            res.end(data)
        })
    } 
    else if (url === '/locate') {
        fs.readFile(path.join(__dirname, 'locate.html'), (error,data) => {
            if (error) throw error
            res.end(data)
        })
    } 

      //to display image
    if (url == "/Images/pic1.png") {

        var img = fs.readFileSync('./Images/pic1.png');
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(img, 'binary');

        return;
    }

    if (url == "/Images/pic2.png") {

        var img = fs.readFileSync('./Images/pic2.png');
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(img, 'binary');

        return;
    }
    if (url == "/Images/pic3.png") {

        var img = fs.readFileSync('./Images/pic3.png');
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(img, 'binary');

        return;
    }
    if (url == "/Images/logo.png") {

        var img = fs.readFileSync('./Images/logo.png');
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(img, 'binary');

        return;
    }
    if (url == "/Images/hazard.jpg") {

        var img = fs.readFileSync('./Images/hazard.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpg' });
        res.end(img, 'binary');

        return;
    }

    if (url == "/Images/nonrecycle.jpg") {

        var img = fs.readFileSync('./Images/nonrecycle.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpg' });
        res.end(img, 'binary');

        return;
    }

    if (url == "/Images/recycle.jpg") {

        var img = fs.readFileSync('./Images/recycle.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpg' });
        res.end(img, 'binary');

        return;
    }

    if (url == "/Images/organic.jpeg") {

        var img = fs.readFileSync('./Images/organic.jpeg');
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(img, 'binary');

        return;
    }

});

server.listen(port, (error) => {
    if (error) {
        console.log("Something went wrong",error);
    } else {
        console.log("Server is listening on port " + port);
    }
})
