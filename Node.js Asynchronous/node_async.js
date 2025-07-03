{
  const fs = require("fs").promises;
  console.log("1. Reading file...");
  fs.readFile("myfile.txt", "utf-8")
    .then((data) => {
      console.log("3. File content: ", data);
    })
    .catch((err) => console.log("Error: ", err));

  console.log("2. This runs before file is read!");
}

{
  const fs = require("fs").promises;
  async function readFiles() {
    try {
      console.log("1. Starting to read files...");
      //   const data1 = await fs.readFile("file1.txt", "utf-8");
      //   const data2 = await fs.readFile("file2.txt", "utf-8");

      // ⚡⚡ How to read both in parallel
      // Use Promise.all:

      const [data1, data2] = await Promise.all([
        fs.readFile("file1.txt", "utf-8"),
        fs.readFile("file2.txt", "utf-8"),
      ]);

      console.log("2. Files read successfully!");
      return { data1, data2 };
    } catch (err) {
      console.log("Error : ", err);
    }
  }

  readFiles();
}
