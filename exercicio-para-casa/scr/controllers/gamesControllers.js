const { response } = require("express")
const games = require("../models/games.json")

const getGames = (request, response) => {
    console.log(request.url)
    response.status(200).send(games)
}

module.exports = {
    getGames
}