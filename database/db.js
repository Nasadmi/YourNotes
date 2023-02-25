const mysql = require("mysql");

const conf = require("../src/env/env.js")

conf()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
})

const connect = () => {
    db.connect(err => {
        if (err) throw err;
        console.log(`Connected to database: ${process.env.DB_NAME}`)
    })
}

module.exports = {
    pool: db,
    connect
};