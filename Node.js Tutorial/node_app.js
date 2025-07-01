// console.log("Hello Node");
// const http = require("http");

// http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello Wordl!");
// });

// const os = require("os");
// console.log(os.platform());

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log(`Server running at http://localhost:8080/`);
});
