const http = require("http");
const fs = require("fs");

// http
//   .createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(err);
//       res.end();
//     });
//   })
//   .listen(3000);

// fs.appendFile("message.txt", " Hello from update file appended file", (err) => {
//   if (err) throw err;
//   console.log("Update!");
// });

fs.writeFile(
  "message2.txt",
  "Hello updated file from updateFile.js writeFile!",
  (err) => {
    if (err) throw err;

    console.log("Updated!");
  }
);
