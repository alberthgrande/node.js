// Load the filesystem module
const fs = require("fs");

// Read file asynchronously
fs.readFile("myfile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
    return;
  }
  console.log("File content: ", data);
});

console.log("Reading file... (this runs firsts!)");
