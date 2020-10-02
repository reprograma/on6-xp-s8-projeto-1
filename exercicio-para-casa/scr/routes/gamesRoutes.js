const express = require("express")
const router = express.Router()
const controller = require("../controllers/gamesControllers")

router.get("/jogos", controller.getAll)
router.get("/jogos/:id", controller.getById)

module.exports = router