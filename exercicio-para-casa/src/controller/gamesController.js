const games = require("../model/games.json")

const newGamesList = games.map(game => {
  const newGame = {
    id: game.id,
    nome: game.name,
    plataformas: game.platforms,
    capa: game.cover
  }
  return newGame
})

const gameListComplete = games.map(game => {
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

const getGames = (request, response) => {
  response.status(200).send(newGamesList)
}

const getGamesById = (request, response) => {
  const id = request.params.id
  const game = gameListComplete.find(game => game.id == id)
  if (game) {
      response.status(200).send(game)
  } else {
      response.status(404).send("Jogo não encontrado.")
  }
}

module.exports = {
  getGames,
  getGamesById
}