const fs = require("fs");

fs.rename("mynewfiles3.txt", "myrenamedfile3.txt", (err) => {
  if (err) throw err;
  console.log("File Renamed!");
});
