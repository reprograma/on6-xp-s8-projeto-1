const express = require('express')
const app = express()
const gamesRoute = require('./routes/gamesRoute')

app.use('/jogos', gamesRoute)

module.exports = app