const express = require('express')
const router = express.Router()
const controller = require('../controllers/gamesController')

router.get('/', controller.getGames)
router.get('/:id', controller.getGamesById)

module.exports = router