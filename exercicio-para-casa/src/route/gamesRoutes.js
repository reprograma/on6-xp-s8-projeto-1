const express = require("express");
const router = express.Router();

const controller = require("../controller/gamesController");

router.get("/games", controller.getGames);
router.get("/games/:id", controller.getGamesById);

module.exports = router;