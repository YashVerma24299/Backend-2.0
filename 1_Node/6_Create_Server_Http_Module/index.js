// req →  request aana
// res →  response jaana

const http = require('http');
const PORT = 3000;

// here, server is EventEmitter
const server = http.createServer((req, res)=>{
    // res.end("Hello from Node Server");
    if(req.url==="/"){
        res.end("Home");
    } else if(req.url==="/about"){
        res.write("About");
        res.end();
    }
})

server.listen(PORT, ()=>{
    console.log("Server running on port: ", PORT);
})