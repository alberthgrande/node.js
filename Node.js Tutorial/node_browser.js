const https = require("https");
{
  // Global Objects
  // Node.js
  global.mylet = 42;
  console.log(global.myVar); // 42
}
{
  // Browser
  //   window.mylet = 42;
  //   console.log(window.myVar); // 42
}
{
  // HTTP Requests
  // Node.js

  https.get("https://example.com", (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => console.log(data));
  });
}
{
  // Browser
  fetch("https://example.com")
    .then((response) => response.text())
    .then(console.log);
}
