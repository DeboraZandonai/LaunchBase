// NPM INIT -Y
// NPM INSTALL EXPRESS
// npm i -D nodemon
// npm i nunjucks
// npm i browser-sync npm-run-all -D // atualizar no google

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

server.get("/",function(req,res){
    return res.render("index")
})

server.get("/classes",function(req,res){
    return res.render("classes")
})

server.listen(5000,function() {
    console.log("server is running")
})
