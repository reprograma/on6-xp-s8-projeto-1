const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController")

//router.get("/", controller.getAll)
router.get("/", controller.getGames)
router.get("/:id", controller.getGamesbyId)

module.exports =  router 