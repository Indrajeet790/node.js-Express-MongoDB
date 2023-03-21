const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, resp) => {
  // Solution
  fs.readFile("./how-node-work/test-file.txt", (err, data) => {
    if (err) {
      console.log("err");
    }
    // else {
    //   console.log("success");
    // }
    resp.end(data);
  });
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening.....");
});
