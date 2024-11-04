const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.originalUrl);
  // GET , / , undefined

  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    const body = `
    <html>
      <title>This is form page</title>
        <body>
          <form method="POST" action="/message">
            <input type="text" name="message" />
            <br/>
            <br/>
            <button type="submit">Send</button>
          </form>
        </body>
    </html>
    `;

    res.setHeader("Content-Type", "text/html");
    res.write(body);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      // console.log(chunk);
      // console.log(typeof chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      // console.log(body.toString());
      const response = Buffer.concat(body).toString();

      const dateToWrite = response.split("=")[1];
      console.log(response);

      fs.writeFile("message.txt", dateToWrite, (error) => {
        if (!error) {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });

    return;
    // return res.end();
  }

  commonHtml = `
    <html>
      <head>common page</head>
      <body>
        <h1>This is general response</h1>
      </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.write(commonHtml);
  return res.end();
});

server.listen(3000, (error) => {
  console.log("server is listening");
});

server.on("close", () => {
  console.log("hey we are closed now");
});
