console.log(`testing....`);

const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const port = process.env.PORT
const hostname = '127.0.0.1';

    
server.listen(port, hostname,  () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});