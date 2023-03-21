// console.log(arguments);
// console.log(require("module").wrapper);

// modules.exports
const Cal = require("./test-modules1");
const calc1 = new Cal();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module2");
// console.log(calc2.multiply(3, 7));

//
const { add, multiply, divide } = require("./test-module2");
console.log(multiply(6, 2));

// caching
require("./test-modules3")();
