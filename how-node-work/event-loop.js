const fs = require("fs");

const crypto = require("crypto");
const start = Date.now();
// when you can set single thread in thread pool
process.env.UV_THREADPOOL_SIZE = 1;
setTimeout(() => console.log("Timer 1 is finished"), 0);
setTimeout(() => {
  console.log("Immediate 1 finished");
});
fs.readFile("./how-node-work/test-file.txt", () => {
  console.log("I/o finished");
  console.log("/////////////////");

  setTimeout(() => console.log("Timer 1 is finished"), 0);
  setTimeout(() => console.log("Timer 1 is finished"), 3000);
  setTimeout(() => {
    console.log("Immediate 1 finished");
  });

  process.nextTick(() => console.log("process.nexTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("hello from the top -level code");
