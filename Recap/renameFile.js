const fs = require("fs");

fs.rename("message1.txt", "messageRanamed_1.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});
