const express = require("express")

const session = require("express-session")

const path = require("path")

const conf = require("./env/env.js")

const { connect } = require("../database/db.js")

const indexRouter = require("./router/indexRoutes.js")

const app = express();

conf()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
}))

app.set("views", path.join(__dirname, "views"))

app.set("view engine", "ejs")

app.use("/files", express.static(path.join(__dirname, "public")))

app.use(indexRouter)

app.set("port", process.env.PORT)

app.listen(app.get("port"), () => {
    console.log("Server is listening on port", app.get("port"))
})

connect()