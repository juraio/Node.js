const express = require("express")

const server = express()


//rotas
server.get('/usuario', (request,response) => {
    return response.send("Esse e os usuarios")
})

server.get('/clientes', (request,response) => {

    console.log(request.query.usuario)
    return response.send("request.query.usuario")
})

server.listen(3000)