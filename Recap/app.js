var http = require("http");
var dateTime = require("./dateTime");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Date and Time: " + dateTime.dateTime());
    res.end();
  })
  .listen(8080);
