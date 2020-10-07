const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController.js")
const cors = require("cors")

router.get("/gamesLista", cors(), controller.getGames)
router.get("/gamesLista/:id", cors(), controller.gamesById)


module.exports = router