// const C = require("./serviceB");

// function A() {
//   console.log("A from A");
// }
// console.log(C);
// // C();

// module.exports = A;

const serviceB = require("./serviceB");

function A() {
  console.log("A from A");
  serviceB(); // Call serviceB here instead of at the top level
}

A();

module.exports = A;
