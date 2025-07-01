const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    var qry = url.parse(req.url, true).query;
    var qryText = qry.year + " " + qry.month;
    res.end(qryText);
  })
  .listen(3000);
