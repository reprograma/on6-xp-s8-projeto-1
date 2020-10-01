const express = require("express")
const router = express.Router()
const controller = require("../controller/musicasController")
const cors = require("cors")

router.get("/musicas", cors(), controller.getMusicas)
router.get("/musicas/:id", cors(), controller.getMusicasbyId)
router.get("/artistas", cors(), controller.getArtistas)
router.get("/artistas/:id", cors(), controller.getArtistabyId)
router.get("/albuns", cors(), controller.getAlbuns)
router.get("/albuns/:nome", cors(), controller.getAlbumPorNome)

module.exports = router
