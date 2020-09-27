const express = require("express")
const router = express.Router()
const controller = require("../controllers/gamesController")

router.get("/jogos", controller.getGames)
router.get("/jogos/:id", controller.showGamesById)

module.exports = router
