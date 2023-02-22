const http = require("http");
const server = http.createServer((req, resp) => {
  console.log(req);

  resp.end("hello from the server");
});
server.listen(7000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
