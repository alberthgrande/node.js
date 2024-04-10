const formidable = require("formidable");
const http = require("http");
const fs = require("fs");
const path = require("path");

const uploadDirectory = path.join(__dirname, "files");

// Ensure that the upload directory exists, if not, create it
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const server = http.createServer(function (req, res) {
  if (req.url == "/fileupload") {
    var form = new formidable.IncomingForm({
      maxFileSize: Infinity,
      maxTotalFileSize: Infinity,
    });

    form.on("error", function (err) {
      console.error("Formidable Error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error processing upload: " + err.message);
    });

    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      // Accessing the first file uploaded
      var uploadedFile = files.filetoupload[0];
      var oldpath = uploadedFile.filepath;
      var newpath = path.join(uploadDirectory, uploadedFile.originalFilename);

      console.log("Old Path:", oldpath);
      console.log("New Path:", newpath);

      // Create a read stream from the uploaded file and a write stream to the new location
      var readStream = fs.createReadStream(oldpath);
      var writeStream = fs.createWriteStream(newpath);

      // Pipe the read stream into the write stream to copy the file
      readStream.pipe(writeStream);

      // Listen for finish event to indicate the copy operation is complete
      writeStream.on("finish", function () {
        console.log("File copied successfully!");
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("File uploaded and copied!");
        res.end();
      });

      // Handle errors during the copy process
      readStream.on("error", function (err) {
        console.error("Read Stream Error:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error copying the file");
      });
      writeStream.on("error", function (err) {
        console.error("Write Stream Error:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error copying the file");
      });
    });
  } else {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.error("Read File Error:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
