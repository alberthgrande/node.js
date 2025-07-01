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

// appendFile create new file
// fs.appendFile("message.txt", "append file system", (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

// open file
// fs.open("message1.txt", "w", (err) => {
//   if (err) throw err;

//   console.log("Save!");
// });

// write file same to append file it creates if the file doesn't exist
fs.writeFile("message2.txt", "Hello from message 2 txt file", (err) => {
  if (err) throw err;
  console.log("Save!");
});
