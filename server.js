//criando um servidor NodeJs

const express = require('express') //chama o express
const nunjucks = require('nunjucks') //dependencia pra trabalhar com reaproveitamento de codigo

const server = express() //executar o express
const routes = require("./routes") //rotas

server.use(express.static('public')) //arquivos estaticos
server.use(routes) 

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache:true
})


server.listen(3000, function(){}, function(req, res) {
    console.log("Hello World")
})