const http =require('http')
const server =http.createServer((req,res)=>{

res.end('salut')

})
server.listen(3000)