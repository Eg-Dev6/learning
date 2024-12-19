module.exports = (req, res) => {
if (req.url === '/api/test' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('welcome to test Route');
} else {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Route not found');
}
};