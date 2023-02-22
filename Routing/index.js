const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, resp) => {
  // console.log(req.url);

  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    resp.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    resp.end("This is the PRODUCT");
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
