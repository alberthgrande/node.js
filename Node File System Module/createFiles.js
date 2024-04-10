const fs = require("fs");

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile("mynewfile1.txt", "Hello content!", (err) => {
  if (err) throw err;
  console.log("Save!");
});

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open("mynewfiles2.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("Save!");
});

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile("mynewfiles3.txt", "Hello content!", (err) => {
  if (err) throw err;
  console.log("Save!");
});
