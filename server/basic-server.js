import { createServer, request } from "node:http";

const server = createServer((request, response) => {
    console.log(request.method, request.url)

    if (request.url === '/') {
        response.end("home page")
        return
    }
    if(request.url === '/profile') {
        const profile = {
            name: 'Viki',
            role: 'Web developer',
        }
        response.setHeader('Content-Type', 'application/json')

        response.end(JSON.stringify(profile))
        return
    }
    response.statusCode = 404
    response.end('page not found')
})
const PORT = 3000
server.listen(PORT, () => {
    console.log('server running');
    
})