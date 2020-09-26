const express = require("express")
const router = express.Router()
const controller = require("../controller/musicasController")

router.get("/", controller.getMusicas)

module.exports = router

