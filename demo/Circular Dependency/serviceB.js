// const serviceA = require("./serviceA");

// const C = () => {
//   console.log("C from B");
// };
// serviceA();

// module.exports = C;

const serviceA = require("./serviceA");

const functionB = () => {
  console.log("B from B");
  serviceA(); // Call serviceA here instead of at the top level
};

module.exports = functionB;
