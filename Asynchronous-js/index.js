const fs = require("fs");

fs.readFile(`${_dirname}/dog.txt`, (err, data) => {
  console.log("Breed:`${data}");
});
