const http = require("http");
const port = 4500;
const server = http.createServer((req, res) => {
    let text = "";
    if (req.url === "/login") {
        text = "Login success"
    } else {
        text = "Login fail";
    }
    res.end(text);

})
server.listen(port, () => {
    console.log("You are listening on port ", port)
})