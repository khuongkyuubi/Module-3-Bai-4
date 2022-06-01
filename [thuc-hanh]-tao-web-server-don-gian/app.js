const http = require("http");
const port = 4000;
const server = http.createServer((req, res)=> {
    res.write('<h1> Hello world!!! </h1><hr>');
    res.end()

})
server.listen(port, ()=> {
    console.log("You ar listening on port ", port)
})