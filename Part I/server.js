// console.log("Hello world!");
// node is using global instead of window
// console.log(global);
// common module instead of E6 module
// const os = require("os");
// console.log("os.type() : ", os.type()); // get the type of the os
// console.log("os.version()): ", os.version()); // get what type of os
// console.log("os.homedir() : ", os.homedir()); // get the os directory

// const path = require("path");

// console.log("__dirname : ", __dirname);
// console.log("__filename : ", __filename);

// console.log("(path.dirname(__filename) : ", path.dirname(__filename)); // return the file path
// console.log("path.basename(__filename) : ", path.basename(__filename)); // return the file
// console.log("path.extname(__filename) : ", path.extname(__filename)); // return the extenstion name

// console.log(path.parse(__filename)); // get the full path detail using parse

// first way
// const math = require("./math");
// second way using destracturing
const { add, subtract, multiply, devide } = require("./math");
console.log(add(2, 5));
console.log(subtract(2, 5));
console.log(multiply(2, 5));
console.log(devide(2, 5));
