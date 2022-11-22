// M04 Advanced Node
const http = require('http');

const server = http.createServer((reg, res) => {
    console.log(req.url, req.method);

    //set header type content
    res.setHeader("Content-Type", "text/html");

    // send a html file
    fs.readFile("./views/index.html", (err, data) => {
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