const fs = require("fs");

/*
The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile("mynewfile1.txt", " This is my text.", (err) => {
  if (err) throw err;
  console.log("Updated!");
});

*/

// The fs.writeFile() method replaces the specified file and content:
fs.writeFile("mynewfile1.txt", " This is my text.", (err) => {
  if (err) throw err;
  console.log("Replace!");
});
