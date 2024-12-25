import http from 'http'
const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === '/a' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('welcome to A Route');
    } else if (req.url === '/b' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('welcome to B Route');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
})

server.listen(2000)
