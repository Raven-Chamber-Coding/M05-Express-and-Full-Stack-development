// M04 Advanced Node
const http = require('http');
const fs = require("fs");

const server = http.createServer((reg, res) => {
    console.log(req.url, req.method);

    //set header type content
    res.setHeader("Content-Type", "text/html");

    let path = "./views";
    switch(req.url) {
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        default:
            path += "404.html";
            break;
    }

    // send a html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, "localhost", () => {
    console.log("listening for request on port 3000");
});