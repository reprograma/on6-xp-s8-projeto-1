const express = require("express")
const app = express()
const router = require("./route/musicasRoutes")

app.use("/musicas", router)

module.exports = app
