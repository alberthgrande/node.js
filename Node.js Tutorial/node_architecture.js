const fs = require("fs");
{
  // Example: Non-blocking File Read
  console.log("Before file read");
  fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log("File contents: ", data);
  });

  console.log("After file read");
}

{
  // Example: Blocking vs Non-blocking Code
  console.log("Start of blocking code");
  const data = fs.readFileSync("myfile.txt", "utf-8");
  console.log("Blocking operation completed");

  console.log("Start of none-blocking code");
  fs.readFile("myfile.txt", "utf-8", (err, data) => {
    if (err) throw err;

    console.log("Non-blocking operation completed");
  });
  console.log("This runs before the file is read");
}
