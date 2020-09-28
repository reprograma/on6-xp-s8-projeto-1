const games = require('../models/games.json')

const newGamesList = games.map(game => {
    const newGame = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        capa: game.cover
    }

    return newGame
})

const getGames = (request, response) => {
    response.status(200).send(newGamesList)
}

const newListofGames = games.map(game => {
    const newGame = {
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

    return newGame
})

const getGamesById = (request, response) => {
    const id = request.params.id
    const game = newListofGames.find(game => game.id == id)

    if(!game) {
        response.status(404).send({message: 'Jogo não encontrado.'})
    } else{
        response.status(200).send(game)
    }

}

module.exports = {
    getGames,
    getGamesById
}