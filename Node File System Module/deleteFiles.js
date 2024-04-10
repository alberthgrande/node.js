const fs = require("fs");
/*
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:
*/
fs.unlink("mynewfiles2.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});
