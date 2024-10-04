const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.originalUrl);
});

server.listen(3000, () => {
  console.log("Server Is Listening");
});
