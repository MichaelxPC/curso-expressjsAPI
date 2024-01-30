import http from 'node:http'

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200
        res.end()
    }
})

server.listen(4003, () => {
    console.log('Server on http://localhost4001');
})