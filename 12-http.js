const say = require("./5-utils"); //i made this so that i could use say function insteady of console.log

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h2>welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(
    `<h1>Opps!</h1><p>can't seem to find the page you are looking for</p><a href=" /
      ">back home</a>`
  );
});

server.listen(5000);
