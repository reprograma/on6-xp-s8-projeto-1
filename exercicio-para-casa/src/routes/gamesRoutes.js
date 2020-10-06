const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController")
const cors = require("cors")

router.get("/games", cors(), controller.getGames)
router.get("/games/:id", cors(), controller.getGamesById)

module.exports = router