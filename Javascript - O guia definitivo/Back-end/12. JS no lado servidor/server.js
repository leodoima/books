const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("This is a page!");
});

server.listen(8000, function () {
  console.log("We are ready!");
});
