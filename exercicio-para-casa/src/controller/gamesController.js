const { response } = require("../../../src/app")
const games = require("../model/games.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(games)
}

const getById = (request, response) => {
    console.log(request.url)
    const id = request.params.id
    console.log(id)
    const gameExists = games.find(game => game.id == id)
    if(!gameExists)
        return response.status(404).send("Jogo não existe!")
    
    return response.status(200).send(gameExists)
}

module.exports = {
    getAll,
    getById,
}