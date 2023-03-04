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
    res.render('contact', {
        title: process.env.TITLE
    })
})

routes.get('/login', (req,res) => {
    res.render('login', {
        title: process.env.TITLE,
        alert: false,
        alertTitle: undefined,
        alertMessage: undefined,
        imageUrl: undefined,
        showConfirmButton: undefined,
        timer: undefined,
        route: undefined
    })
})

routes.get('/register', (req,res) => {
    res.render('register', {
        title: process.env.TITLE,
        alert: false,
        alertTitle: undefined,
        alertMessage: undefined,
        imageUrl: undefined,
        showConfirmButton: undefined,
        timer: undefined,
        route: undefined
    })
})

module.exports = routes;