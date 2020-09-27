const games = require('../models/games.json')

const formattedGames = games.map(game => {
    const formattedGame = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        capa: game.cover
    }
    return formattedGame
})

const formattedGamesExtended = games.map(game => {
    const formattedGame = {
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
    return formattedGame
})

const getGames = (request, response) => {
    response.status(200).send(formattedGames)
}

const getGamesById = (request, response) => {
    const id = request.params.id
    const game = formattedGamesExtended.find(game => game.id == id)
    if(game){
        response.status(302).send(game)
    } else {
        response.status(404).send('Id de jogo não encontrado')
    }

}

module.exports = {
    getGames,
    getGamesById
}