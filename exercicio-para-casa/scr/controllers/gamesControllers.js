const games = require("../models/games.json")

const newGamesList = games.map(game => {
    const newList = {
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
    return newList
})

const getById = (request, response) => {
    const id = request.params.id
    const game = newGamesList.find(item => item.id == id)
    if (game) {
        response.status(200).send(game)
    } else {
        response.status(404).send("ID não localizado")
    }
}

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(games)
}

module.exports = {
    getAll,
    getById
}