const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController")
const cors = require("cors")


//@route GET jogos
//@desc Retornar todas os jogos
//@access Public 
//@endpoint http://localhost:porta/jogos
router.get("/jogos", cors(), controller.getGames)

//@route GET jogos
//@params :id
//@desc Retornar apenas um único jogo pelo seu id: identificador
//@access Public
//@endpoint http://localhost:porta/jogos/:id
router.get("/jogos/:id", cors(), controller.getGamesById)



module.exports = router