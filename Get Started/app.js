const http = require("http");
const dt = require("./myfirstmodule");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("The date and time is currently : " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
