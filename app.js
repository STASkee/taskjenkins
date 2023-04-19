const http = require('http');

const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/plain'});

  const result = 2 + 3;
  res.end(`2 + 3 = ${result}`);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
