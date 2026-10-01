const http = require("http");

const PORT = process.env.PORT || 2000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/" || req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      ok: true,
      status: "online"
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    ok: false,
    error: "Endpoint not found"
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
