const http = require("http");

const router = require("./routes");

const server = http.createServer(router);

server.listen(3000, (error) => {
  console.log("server is listening");
});

server.on("close", () => {
  console.log("hey we are closed now");
});
