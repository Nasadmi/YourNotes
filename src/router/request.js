const { Router } = require("express")

const conf = require("../env/env.js")

const { pool } = require("../../database/db.js")

const bcryptjs = require("bcryptjs")

const request = Router()

conf()

request.post('/register', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const passwordHash = await bcryptjs.hash(password, 8);
    pool.query(`SELECT * FROM tbl_users WHERE username = '${username}'`, async (err, result) => {
        if (err) throw err;
        if (result[0] != undefined) {
            res.render('register', {
                title: process.env.TITLE,
                alert: true,
                alertTitle: 'The user already exists or is already registered',
                alertMessage: '<a href="//sweetalert2.github.io">links</a>',
                imageUrl: '/files/img/error.png',
                showConfirmButton: true,
                timer: 10000,
                route: '/register'
            })
        } else if(result[0] == undefined) {
            pool.query(`INSERT INTO tbl_users (username, email, password) VALUES ('${username}', '${email}', '${passwordHash}')`, async (err,result) => {
                if(err) throw err;
                req.session.loggeded = true;
                req.session.username = username;
                res.render('register', {
                    title: process.env.TITLE,
                    alert: true,
                    alertTitle: 'Welcome to YourNotes',
                    alertMessage: '',
                    imageUrl: '/files/img/success.png',
                    showConfirmButton: true,
                    timer: 2500,
                    route: '/register'
                })
            })
        }
    })
})

module.exports = request;