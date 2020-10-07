const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController")

router.get("/", controller.getAll)
router.get("/jogos", controller.getGames)

module.exports =  router 