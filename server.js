// M04 Advanced Node
const http = require('http');

const server = http.createServer((reg, res) => {
    console.log(req.url, req.method);

    //set header type content
    res.setHeader("Content-Type", "text/plain");

    res.write("Hello ninjas");
    res.end()
});

server.listen(3000, "localhost", () => {
    console.log("listening for request on port 3000");
});