const express = require("express")
const app = express()

const games = require("./routes/gamesRoutes")

app.use("/", games)

module.exports = app