const { Router } = require("express")

const conf = require("../env/env.js")

const routes = Router()

conf()

routes.get('/', (req,res) => {
    res.render('index', {
        title: process.env.TITLE
    })
})

routes.get('/about', (req,res) => {
    res.render('about', {
        title: process.env.TITLE
    })
})

routes.get('/contact', (req,res) => {
    res.render('c0ontact', {
        title: process.env.TITLE
    })
})

routes.get('/', (req,res) => {
    res.render('login', {
        title: process.env.TITLE
    })
})

routes.get('/register', (req,res) => {
    res.render('register', {
        title: process.env.TITLE
    })
})

module.exports = routes;