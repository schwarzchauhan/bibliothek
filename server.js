require('dotenv').config()
// console.log(`testing....`);

const http = require('http')
const app = require('./app')
const server = http.createServer(app)

// console.log(process.env);

var port = process.env.PORT;
var hostname = process.env.HOSTNAME;
if(process.env.NODE_ENV == 'development'){
  hostname = 'localhost'
}

server.on('listening', () => {
  console.log(server.address().address, server.address().port);
})
server.listen(port, hostname,  () => {
  console.log(server.address().address, server.address().port, `Server running at http://${hostname}:${port}/`);
});