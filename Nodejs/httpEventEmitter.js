const http = require('http')

const server = http.createServer()

const port = 3000

server.on('response',(req,res)=>{
    res.end("It should work, I hope so")
})

server.listen(port,()=>{
    console.log(`Server is listening in ${port}`)
})