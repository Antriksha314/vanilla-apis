const http = require("http");
const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.write("Hey server here");
    res.end();
  }
});

server.listen(5001, () => {
  console.log("server on http://localhost:5001");
});
