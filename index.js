const http = require('http');


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    //const userIP = req.connection.remoteAddress;
    const userIP = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;

    res.write('IP: ' + userIP);
    res.end();
  }
});



// PORT (env variable set outside this application
const port = process.env.PORT || 3001;

server.listen(port);
console.log(`Listening on port ${port}...`);
