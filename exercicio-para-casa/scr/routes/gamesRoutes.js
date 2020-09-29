const express = require("express")
const router = express.Router()
const controller = require("../controllers/gamesControllers")

router.get("/jogos", controller.getGames)

module.exports = router