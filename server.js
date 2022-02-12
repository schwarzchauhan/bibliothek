require('dotenv').config()
// console.log(`testing....`);

const http = require('http')
const app = require('./app')
const server = http.createServer(app)

// console.log(process.env);
var PORT = process.env.PORT;
var HOSTNAME = process.env.HOSTNAME;
if(process.env.NODE_ENV == 'development'){
  HOSTNAME = 'localhost'
}

server.listen(PORT, HOSTNAME,  () => {
  const hostname = server.address().address;
  const port = server.address().port;
  console.log(`Server running at http://${hostname}:${port}/`);
});