const games = require("../models/games.json")

const newArrayGames = games.map(game => {
    return {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        capa: game.cover
    }
})

const getGames = (request, response) => {
    response.status(200).send(newArrayGames)
}

const gamesById = games.map(game => {
    return {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        data_lancamento: game.first_release_date,
        slug: game.slug,
        resumo: game.summary,
        empresa: game.company,
        capa: game.cover
    }
})

const showGamesById = (request, response) => {
    const id = request.params.id
    const gameId = gamesById.find(game => game.id == id)

    if(gameId) {
        response.status(200).send(gameId)
    } else {
        response.status(404).send("Id não encontrado")
    }
}

module.exports = {
    getGames,
    showGamesById
}