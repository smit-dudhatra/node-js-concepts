const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.originalUrl);
  // GET , / , undefined

  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    server.close(() => {
      console.log("good bye");
    });

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
    res.end();
  }

  if (url === "message" && method === "POST") {
  }
});

server.listen(3000, () => {
  console.log("Server Is Listening");
});
