const express = require("express")
const app = express()
const router = require("./router/gamesRouter")

app.use("/", router)

module.exports = app