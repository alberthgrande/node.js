const http = require("http");
const fs = require("fs"); // To handle the file system

http
  .createServer((req, res) => {
    //Open a file on the server and return its content:
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
