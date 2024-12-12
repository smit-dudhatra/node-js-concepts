// const abc = [Buffer.from("hello"), Buffer.from("world")];
// // const abc = ["hello", "world"];
// // const abc = [1, 2, 3]; // will throw error in line 5 because for line 5 all elements of array should be instance of Buffer

// console.log(abc.toString());
// console.log(Buffer.concat(abc).toString());

// ========================

const axios = require("axios");

const fs = require("fs");

console.log("started");

setTimeout(() => {
  console.log("0");
}, 0);

axios
  .get("https://reqres.in/api/users?page=2")
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error);
  });

fs.writeFile("message.txt", "hello", () => {
  console.log("written");
});

setTimeout(() => {
  console.log("0-2");
}, 0);

console.log("ended");
