const express = require("express")
const app = express()

//rotas
const games = require("./routes/gamesRoute")

app.use("/jogos", games)

module.exports = app