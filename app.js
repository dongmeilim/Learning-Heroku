const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>What is up?</h1></h2>Joe was here</h2>');
  let dataFile = require('./smym-data.json');
  let stringData = JSON.stringify(dataFile);
  console.log(stringData);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
