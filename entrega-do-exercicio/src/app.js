const routes = require('./routes/gamesRoutes')

const express = require('express')

const app = express()

app.use('/', routes)

module.exports = app