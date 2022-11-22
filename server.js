// M04 Advanced Node
const http = require('http');

const server = http.createServer((reg, res) => {
    console.log(req.url, req.method);

    //set header type content
    res.setHeader("Content-Type", "text/html");

    res.write(<head><link rel="stylesheet" href="#"></link></head>)
    res.write("<p>Hello ninjas</p>");
    res.write("<p>Hello again, ninjas</p>")
    res.end()
});

server.listen(3000, "localhost", () => {
    console.log("listening for request on port 3000");
});