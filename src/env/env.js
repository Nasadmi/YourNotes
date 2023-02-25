const dotenv = require("dotenv")

const path = require("path")

const conf = () => {
    dotenv.config({
        path: path.join(__dirname, '.env')
    })
}

module.exports = conf;