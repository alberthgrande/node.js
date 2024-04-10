const fs = require("fs"); // for file reader
const path = require("path"); // for path module

/* 
    readfile we have 3 parameter which the:
    -> file path
    -> the encoding
    -> callback function 

    path module .join is to join all the data inside the join
    first: parameter is the directory file
    second: is the folder file
    third: is the file

*/
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("data: ", data);
  }
);

// exit on uncaught errors

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
