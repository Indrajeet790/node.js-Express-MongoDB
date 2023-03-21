const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, resp) => {
  // Solution1
  // fs.readFile("./how-node-work/test-file.txt", (err, data) => {
  //   if (err) {
  //     console.log("err");
  //   }
  //   resp.end(data);
  // });
  //Solution 2:streams
  // const readable = fs.createReadStream("./how-node-work/test-file.txt");
  // readable.on("data", (chunk) => {
  //   resp.write(chunk);
  // });
  // // reading data from file
  // readable.on("end", () => {
  //   resp.end();
  // });
  // readable.on("error", (err) => {
  //   console.log("err");
  //   resp.statusCode = 500;
  //   resp.end("file is not found");
  // });

  // solution 3 use pipe()operator

  const readable = fs.createReadStream("./how-node-work/test-file.txt");
  readable.pipe(resp);
  // readableSource.pipe(writeableDest)
});
server.listen(8000, "127.0.0.1", () => {
  console.log("server is running");
});
