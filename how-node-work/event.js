const EventEmitter = require("events");

const http = require("http");
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name:vijay");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock `);
});

myEmitter.emit("newSale", 9);

// //////////////////////////

const server = http.createServer();
server.on("request", (req, resp) => {
  console.log("request received");
  resp.end("request  received");
});
server.on("request", (req, resp) => {
  console.log("another request  received");
});
server.on("close", (req, resp) => {
  resp.end("server closed");
});

server.listen(8000, "127.0.0.1", (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("waiting for request");
  }
});
