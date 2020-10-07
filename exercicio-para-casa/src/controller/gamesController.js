const gamesLista = require("../model/games.json")

const getGames = (request, response) => {
    return response.status(200).send(gamesLista)
}

const gamesById=(request,response)=>{
    const id=request.params.id
    const gameNaLista=gamesLista.find(game => game.id == id)
        
        if(gameNaLista){
            return response.status(200).send(gameNaLista)
        }else{
            return response.status(404).send("Jogo não encontrado! Insira novamente o id:")
        }
}

module.exports = {
    getGames,
    gamesById
}

/*const getBySigla = (request, response) => {
    const siglaEstado = request.params.siglaEstado
    return response.status(200).send(estados.filter(estado => estado.sigla == siglaEstado))

}*/