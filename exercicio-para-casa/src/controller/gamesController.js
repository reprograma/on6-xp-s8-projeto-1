const games = require("../model/games.json")

const novaListaGames = games.map(game => {
    const novaListaGames = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        capas: game.cover
    }
    return novaListaGames
})

//const getAll = (request, response) =>{
    //console.log(request.url)
  //  response.status(200).send(games)
//}

const getGames = (request, response) =>{
    console.log(request.url)
    response.status(200).send(novaListaGames)
}

const getGamesbyId = (request, response) => {
    const id = request.params.id
    const game = novaListaGames.find(game => game.id == id)
    response.status(200).send(game)
}

module.exports = {
   // getAll,
    getGames,
    getGamesbyId
}