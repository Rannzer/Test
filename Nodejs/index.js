const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    console.log(req?.url)
    res.statusCode = 200
    res.setHeader('Content-type','text/html')

    if(req?.url === '/'){
    res.end('<h1>This is Harsh Sharma</h1><p>Hey this is the way to rock the world!</p>')
    }
    else if(req?.url === '/about'){
        res.end('<h1>This is About section</h1><p>Find yourself comfort here!</p>')
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})