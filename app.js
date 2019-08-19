const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let dataFile = require('./smym-data.json');
  console.log(dataFile.data[0].Summary);
  res.end('<h1>What is up?</h1></h2>HHHHHHHIIII</h2>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
