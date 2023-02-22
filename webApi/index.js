const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, resp) => {
  // console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    resp.end("This is the OVERVIEW");
  } else if (pathName === "/api") {
    fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      // console.log(productData);
      resp.writeHead(200, { "content-type": "application/json" });
      resp.end(data);
    });
  } else {
    resp.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello world",
    });
    resp.end("<h1>Page not found</h1>");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to request on port 4000");
});
