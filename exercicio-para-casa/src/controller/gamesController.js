const { request, response } = require("../app");
const games = require("../model/games.json");

const novaListaGames = games.map(games => {
    const novoGame = {
        "id": games.id,
        "nome": games.name,
        "genero": games.genre,
        "plataforma": games.platforms,
        "resumo": games.summary,
        "companhia": games.company
    }

    return novoGame
});

const getGames = (request, response) => {
    console.log(request.url);
    response.status(200).send(novaListaGames);
}

const getGamesById = (request, response) =>{
    const id = request.params.id;
    const game = novaListaGames.find(games => games.id == id);

    if(game){
        response.status(200).send(game);
    } else{
        response.status(404).send("Jogo não encontrado.");
    }
}

module.exports = {
    getGames,
    getGamesById
}