const express = require('express')

const routes = express.Router()

//ROTAS 
routes.get('/', function(req, res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res){
    return res.send("instructors")
})

routes.get('/members', function(req, res){
    return res.send("members")
})


module.exports = routes