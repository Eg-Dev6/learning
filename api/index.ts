module.exports = (req: any, res: any) => {
    if (req.url === '/api/a' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('welcome to A Route');
    } else if (req.url === '/api/b' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('welcome to B Route');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
};
